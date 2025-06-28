from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from database.db import db
from models.user import User
from config import settings

# Create Blueprint
auth_bp = Blueprint('auth', __name__)

# Authentication functions
def verify_password(plain_password, hashed_password):
    return check_password_hash(hashed_password, plain_password)

def get_password_hash(password):
    return generate_password_hash(password)

def get_user(username):
    return User.query.filter_by(username=username).first()

# Routes
@auth_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    
    # Check if required fields are present
    if not data or not 'username' in data or not 'email' in data or not 'password' in data:
        return jsonify({"detail": "Missing required fields"}), 400
    
    # Check if user already exists
    db_user = get_user(data['username'])
    if db_user:
        return jsonify({"detail": "Username already registered"}), 400
    
    # Create new user
    new_user = User(
        username=data['username'],
        email=data['email']
    )
    new_user.set_password(data['password'])
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({
        "id": new_user.id,
        "username": new_user.username,
        "email": new_user.email,
        "is_active": new_user.is_active
    }), 201

@auth_bp.route('/token', methods=['POST'])
def login_for_access_token():
    # Check for form data or JSON
    if request.is_json:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
    else:
        username = request.form.get('username')
        password = request.form.get('password')
    
    if not username or not password:
        return jsonify({"detail": "Missing username or password"}), 400
        
    user = get_user(username)
    if not user or not user.check_password(password):
        return jsonify({"detail": "Incorrect username or password"}), 401
    
    expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        identity=user.username,
        expires_delta=expires
    )
    
    return jsonify({"access_token": access_token, "token_type": "bearer"})

@auth_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    current_user_identity = get_jwt_identity()
    user = get_user(current_user_identity)
    
    if not user:
        return jsonify({"detail": "User not found"}), 404
    
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "is_active": user.is_active
    })