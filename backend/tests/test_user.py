import pytest
from models.user import User
from database.db import db


class TestUserModel:
    """Test User model functionality."""
    
    def test_create_user(self, app):
        """Test creating a new user."""
        with app.app_context():
            user = User(
                username='testuser',
                email='test@example.com'
            )
            user.set_password('testpass123')
            
            db.session.add(user)
            db.session.commit()
            
            assert user.id is not None
            assert user.username == 'testuser'
            assert user.email == 'test@example.com'
            assert user.is_active == True
            
    def test_password_hashing(self, app):
        """Test password hashing and verification."""
        with app.app_context():
            user = User(username='test', email='test@test.com')
            password = 'securepassword123'
            
            # Set password
            user.set_password(password)
            
            # Password should be hashed
            assert user.hashed_password != password
            assert len(user.hashed_password) > 50  # Hashed passwords are long
            
            # Should verify correctly
            assert user.check_password(password) == True
            assert user.check_password('wrongpassword') == False
            
    def test_user_representation(self, app):
        """Test user string representation."""
        with app.app_context():
            user = User(username='testuser', email='test@example.com')
            assert str(user) == '<User testuser>'
            
    def test_user_uniqueness(self, app):
        """Test that usernames must be unique."""
        with app.app_context():
            # Create first user
            user1 = User(username='duplicate', email='user1@test.com')
            user1.set_password('pass1')
            db.session.add(user1)
            db.session.commit()
            
            # Try to create second user with same username
            user2 = User(username='duplicate', email='user2@test.com')
            user2.set_password('pass2')
            db.session.add(user2)
            
            # This should raise an integrity error
            with pytest.raises(Exception):  # SQLAlchemy will raise an IntegrityError
                db.session.commit()
                
    def test_user_defaults(self, app):
        """Test user default values."""
        with app.app_context():
            user = User(username='test', email='test@test.com')
            user.set_password('testpass')  # Need to set password since it's required
            db.session.add(user)
            db.session.commit()
            
            # Default values should be set after commit
            assert user.is_active == True
            assert user.created_at is not None