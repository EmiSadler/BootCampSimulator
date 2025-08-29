from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from config import settings

# Load environment variables first
load_dotenv()


def create_app(test_config=None):
    """Create and configure the Flask application."""
    # Create Flask app
    app = Flask(__name__)

    # Configure app
    if test_config is None:
        # Load the instance config, if it exists, when not testing
        app.config['SECRET_KEY'] = settings.SECRET_KEY
        app.config['JWT_SECRET_KEY'] = settings.SECRET_KEY
        app.config['JWT_ACCESS_TOKEN_EXPIRES'] = settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60

        # Configure database
        if settings.USE_SQLITE:
            app.config['SQLALCHEMY_DATABASE_URI'] = settings.SQLITE_URL
        else:
            app.config['SQLALCHEMY_DATABASE_URI'] = settings.DATABASE_URL

        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    else:
        # Load the test config if passed in
        app.config.update(test_config)

    # Initialize database BEFORE importing routes
    from database.db import db, init_db
    db.init_app(app)

    # Initialize other extensions
    jwt = JWTManager(app)
    
    # Configure CORS - include Netlify domain
    cors_origins = [
        "http://localhost:3000", 
        "http://localhost:3001",
        "https://bootcampsim.netlify.app",  # Your Netlify domain
        "https://bootcampsimulator.sadlers.cloud"  # Your custom domain (if used)
    ]
    
    # Add environment-specific origins
    if os.getenv('CORS_ORIGINS'):
        cors_origins.extend(os.getenv('CORS_ORIGINS').split(','))
    
    # Configure CORS with additional options
    CORS(app, resources={
        r"/*": {
            "origins": cors_origins,
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"],
            "supports_credentials": True
        }
    })

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
        if not test_config:
            print("Database initialized successfully!")

    return app


# Create app instance for production
def main():
    """Initialize database and start the application"""
    # Initialize the database in create_app instead because of gunicorn
    app = create_app()
    port = int(os.getenv("PORT", 8000))
    app.run(host='0.0.0.0', port=port, debug=True)

if __name__ == "__main__":
    main()