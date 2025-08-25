from app import app, db
from models.user import User
from models.game_progress import GameProgress

def test_database():
    with app.app_context():
        try:
            # Try to create a test user
            test_user = User(username='testuser', email='test@example.com')
            test_user.set_password('testpassword')
            
            db.session.add(test_user)
            db.session.commit()
            
            print("✅ Database setup successful!")
            print(f"Created user: {test_user}")
            
            # Clean up
            db.session.delete(test_user)
            db.session.commit()
            
        except Exception as e:
            print(f"❌ Database error: {e}")
            db.session.rollback()

if __name__ == '__main__':
    test_database()