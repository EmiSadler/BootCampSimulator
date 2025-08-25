import pytest
import tempfile
import os
from app import create_app
from database.db import db
from models.user import User


@pytest.fixture
def app():
    """Create and configure a new app instance for each test."""
    # Create a temporary file to serve as the test database
    db_fd, db_path = tempfile.mkstemp()
    
    app = create_app({
        'TESTING': True,
        'SQLALCHEMY_DATABASE_URI': f'sqlite:///{db_path}',
        'SECRET_KEY': 'test-secret-key',
        'JWT_SECRET_KEY': 'test-jwt-secret-key',
        'WTF_CSRF_ENABLED': False
    })

    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()

    os.close(db_fd)
    os.unlink(db_path)


@pytest.fixture
def client(app):
    """A test client for the app."""
    return app.test_client()


@pytest.fixture
def runner(app):
    """A test runner for the app's Click commands."""
    return app.test_cli_runner()


@pytest.fixture
def auth_headers(client):
    """Helper to get auth headers for authenticated requests."""
    def _get_auth_headers(username="testuser", password="testpass123"):
        # Register a user
        client.post('/auth/register', json={
            'username': username,
            'email': f'{username}@test.com',
            'password': password
        })
        
        # Login to get token
        response = client.post('/auth/token', json={
            'username': username,
            'password': password
        })
        
        token = response.get_json()['access_token']
        return {'Authorization': f'Bearer {token}'}
    
    return _get_auth_headers


@pytest.fixture
def sample_user():
    """Create a sample user for testing."""
    return {
        'username': 'testuser',
        'email': 'testuser@example.com',
        'password': 'testpass123'
    }
