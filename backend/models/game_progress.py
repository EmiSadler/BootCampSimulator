from database.db import db
from datetime import datetime
import json
from sqlalchemy.types import TypeDecorator, String

class JSONEncodedDict(TypeDecorator):
    """Represents an immutable structure as a json-encoded string"""
    impl = String
    
    def process_bind_param(self, value, dialect):
        if value is not None:
            value = json.dumps(value)
        return value
    
    def process_result_value(self, value, dialect):
        if value is not None:
            value = json.loads(value)
        return value

class GameProgress(db.Model):
    __tablename__ = "game_progress"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    day = db.Column(db.Integer, default=1)
    energy = db.Column(db.Float, default=100.0)
    coding_skill = db.Column(db.Float, default=0.0)
    python_study_level = db.Column(db.Integer, default=0)
    coding_challenge_level = db.Column(db.Integer, default=0)
    last_coding_activity_day = db.Column(db.Integer, default=1)
    
    # Store complex data as JSON
    cohort_data = db.Column(JSONEncodedDict, default="{}")
    discovered_info = db.Column(JSONEncodedDict, default="{}")
    
    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def to_dict(self):
        """Convert game progress to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'day': self.day,
            'energy': self.energy,
            'coding_skill': self.coding_skill,
            'python_study_level': self.python_study_level,
            'coding_challenge_level': self.coding_challenge_level,
            'last_coding_activity_day': self.last_coding_activity_day,
            'cohort_data': self.cohort_data or {},
            'discovered_info': self.discovered_info or {},
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    def __repr__(self):
        return f'<GameProgress user_id={self.user_id} day={self.day}>'