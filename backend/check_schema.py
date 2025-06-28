from app import app, db
from models.user import User
from models.game_progress import GameProgress

def check_schema():
    with app.app_context():
        # Check table structure
        from sqlalchemy import inspect
        inspector = inspect(db.engine)
        
        print("Available tables:", inspector.get_table_names())
        
        if 'users' in inspector.get_table_names():
            print("Users table columns:")
            for column in inspector.get_columns('users'):
                print(f"  - {column['name']}: {column['type']}")
        
        print("\nUser model attributes:")
        user_attrs = [attr for attr in dir(User) if not attr.startswith('_')]
        for attr in user_attrs:
            if hasattr(getattr(User, attr), 'type'):
                print(f"  - {attr}")

if __name__ == '__main__':
    check_schema()
