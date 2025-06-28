from flask import Blueprint
from api.game_progress import game_progress_bp

# Create Blueprint
api_bp = Blueprint('api', __name__)

# Register child blueprints
api_bp.register_blueprint(game_progress_bp, url_prefix='/game-progress')