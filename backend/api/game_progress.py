from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database.db import db
from models.user import User
from models.game_progress import GameProgress
import json

# Create Blueprint
game_progress_bp = Blueprint('game_progress', __name__)

@game_progress_bp.route('/save', methods=['POST'])
@jwt_required()
def save_game_progress():
    current_user_identity = get_jwt_identity()
    user = User.query.filter_by(username=current_user_identity).first()
    
    if not user:
        return jsonify({"detail": "User not found"}), 404
    
    data = request.get_json()
    if not data:
        return jsonify({"detail": "No data provided"}), 400
    
    # Check if game progress exists
    progress = GameProgress.query.filter_by(user_id=user.id).first()
    
    if progress:
        # Update existing progress
        progress.day = data.get('day', progress.day)
        progress.energy = data.get('energy', progress.energy)
        progress.coding_skill = data.get('coding_skill', progress.coding_skill)
        progress.python_study_level = data.get('python_study_level', progress.python_study_level)
        progress.coding_challenge_level = data.get('coding_challenge_level', progress.coding_challenge_level)
        progress.last_coding_activity_day = data.get('last_coding_activity_day', progress.last_coding_activity_day)
        
        # Handle JSON fields
        if 'cohort_data' in data:
            progress.cohort_data = json.dumps(data['cohort_data'])
        
        if 'discovered_info' in data:
            progress.discovered_info = json.dumps(data['discovered_info'])
    else:
        # Create new progress
        cohort_data = json.dumps(data.get('cohort_data', {}))
        discovered_info = json.dumps(data.get('discovered_info', {}))
        
        progress = GameProgress(
            user_id=user.id,
            day=data.get('day', 1),
            energy=data.get('energy', 100),
            coding_skill=data.get('coding_skill', 0),
            python_study_level=data.get('python_study_level', 0),
            coding_challenge_level=data.get('coding_challenge_level', 0),
            last_coding_activity_day=data.get('last_coding_activity_day', 1),
            cohort_data=cohort_data,
            discovered_info=discovered_info
        )
        db.session.add(progress)
    
    db.session.commit()
    
    # Return the serialized progress
    cohort_data = json.loads(progress.cohort_data) if isinstance(progress.cohort_data, str) else progress.cohort_data
    discovered_info = json.loads(progress.discovered_info) if isinstance(progress.discovered_info, str) else progress.discovered_info
    
    return jsonify({
        "id": progress.id,
        "user_id": progress.user_id,
        "day": progress.day,
        "energy": progress.energy,
        "coding_skill": progress.coding_skill,
        "python_study_level": progress.python_study_level,
        "coding_challenge_level": progress.coding_challenge_level,
        "last_coding_activity_day": progress.last_coding_activity_day,
        "cohort_data": cohort_data,
        "discovered_info": discovered_info
    })

@game_progress_bp.route('/load', methods=['GET'])
@jwt_required()
def load_game_progress():
    current_user_identity = get_jwt_identity()
    user = User.query.filter_by(username=current_user_identity).first()
    
    if not user:
        return jsonify({"detail": "User not found"}), 404
    
    progress = GameProgress.query.filter_by(user_id=user.id).first()
    
    if not progress:
        return jsonify({}), 404
    
    # Handle JSON fields
    cohort_data = json.loads(progress.cohort_data) if isinstance(progress.cohort_data, str) else progress.cohort_data
    discovered_info = json.loads(progress.discovered_info) if isinstance(progress.discovered_info, str) else progress.discovered_info
    
    return jsonify({
        "id": progress.id,
        "user_id": progress.user_id,
        "day": progress.day,
        "energy": progress.energy,
        "coding_skill": progress.coding_skill,
        "python_study_level": progress.python_study_level,
        "coding_challenge_level": progress.coding_challenge_level,
        "last_coding_activity_day": progress.last_coding_activity_day,
        "cohort_data": cohort_data,
        "discovered_info": discovered_info
    })

@game_progress_bp.route('/delete', methods=['DELETE'])
@jwt_required()
def delete_game_progress():
    """Delete all saved game progress for the current user (restart game)"""
    current_user_identity = get_jwt_identity()
    user = User.query.filter_by(username=current_user_identity).first()
    
    if not user:
        return jsonify({"detail": "User not found"}), 404
    
    progress = GameProgress.query.filter_by(user_id=user.id).first()
    
    if progress:
        db.session.delete(progress)
        db.session.commit()
        return jsonify({"message": "Game progress deleted successfully"}), 200
    else:
        return jsonify({"message": "No saved game progress found"}), 404