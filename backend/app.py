from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

# Load environment variables first
load_dotenv()

# Create Flask app
app = Flask(__name__)

# Configure app
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-for-jwt')
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-for-jwt')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES', 1440)) * 60

# Configure database
if os.getenv('USE_SQLITE', 'True').lower() == 'true':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bootcampsim.db'
else:
    db_user = os.getenv('POSTGRES_USER', 'postgres')
    db_password = os.getenv('POSTGRES_PASSWORD', 'postgres')
    db_host = os.getenv('POSTGRES_SERVER', 'localhost')
    db_port = os.getenv('POSTGRES_PORT', '5432')
    db_name = os.getenv('POSTGRES_DB', 'bootcampsim')
    app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database BEFORE importing routes
from database.db import db, init_db
db.init_app(app)

# Initialize other extensions
jwt = JWTManager(app)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "http://localhost:3001"]}})

# Import and register blueprints AFTER database initialization
from auth.routes import auth_bp
from api.routes import api_bp

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(api_bp, url_prefix='/api')

# Root route
@app.route('/')
def root():
    return jsonify({"message": "Welcome to BootCamp Simulator API"})

# Initialize database tables
with app.app_context():
    # Import models to register them with SQLAlchemy
    from models.user import User
    from models.game_progress import GameProgress
    
    # Create all tables
    db.create_all()
    print("Database initialized successfully!")

if __name__ == '__main__':
    app.run(debug=True, port=5001)