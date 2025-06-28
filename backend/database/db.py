from flask_sqlalchemy import SQLAlchemy

# Create database instance
db = SQLAlchemy()

def init_db(app):
    """Initialize the database with the Flask app"""
    # Import all models here so SQLAlchemy knows about them
    from models.user import User
    from models.game_progress import GameProgress
    
    # Initialize the database with the app
    db.init_app(app)
    
    # Create all tables
    with app.app_context():
        db.create_all()
        print("Database tables created successfully!")

def create_tables():
    """Create all database tables"""
    db.create_all()