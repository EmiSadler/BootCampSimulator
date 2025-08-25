import pytest
import json
from models.user import User
from database.db import db


class TestUserRegistration:
    """Test user registration endpoint."""
    
    def test_register_user_success(self, client, sample_user):
        """Test successful user registration."""
        response = client.post('/auth/register', 
                              json=sample_user,
                              content_type='application/json')
        
        assert response.status_code == 201
        data = response.get_json()
        
        assert data['username'] == sample_user['username']
        assert data['email'] == sample_user['email']
        assert data['is_active'] == True
        assert 'id' in data
        
    def test_register_user_duplicate_username(self, client, sample_user):
        """Test registration with duplicate username."""
        # Register user first time
        client.post('/auth/register', json=sample_user)
        
        # Try to register same username again
        response = client.post('/auth/register', json=sample_user)
        
        assert response.status_code == 400
        data = response.get_json()
        assert data['detail'] == "Username already registered"
        
    def test_register_user_missing_fields(self, client):
        """Test registration with missing required fields."""
        test_cases = [
            {},  # No fields
            {'username': 'test'},  # Missing email and password
            {'username': 'test', 'email': 'test@test.com'},  # Missing password
            {'username': 'test', 'password': 'pass'},  # Missing email
            {'email': 'test@test.com', 'password': 'pass'},  # Missing username
        ]
        
        for incomplete_data in test_cases:
            response = client.post('/auth/register', json=incomplete_data)
            assert response.status_code == 400
            data = response.get_json()
            assert data['detail'] == "Missing required fields"
            
    def test_register_user_invalid_json(self, client):
        """Test registration with invalid JSON."""
        response = client.post('/auth/register', 
                              data="invalid json",
                              content_type='application/json')
        
        assert response.status_code == 400


class TestUserLogin:
    """Test user login endpoint."""
    
    def test_login_success(self, client, sample_user):
        """Test successful user login."""
        # Register user first
        client.post('/auth/register', json=sample_user)
        
        # Login
        login_data = {
            'username': sample_user['username'],
            'password': sample_user['password']
        }
        response = client.post('/auth/token', json=login_data)
        
        assert response.status_code == 200
        data = response.get_json()
        
        assert 'access_token' in data
        assert data['token_type'] == 'bearer'
        assert len(data['access_token']) > 0
        
    def test_login_wrong_password(self, client, sample_user):
        """Test login with wrong password."""
        # Register user first
        client.post('/auth/register', json=sample_user)
        
        # Try login with wrong password
        login_data = {
            'username': sample_user['username'],
            'password': 'wrongpassword'
        }
        response = client.post('/auth/token', json=login_data)
        
        assert response.status_code == 401
        data = response.get_json()
        assert data['detail'] == "Incorrect username or password"
        
    def test_login_nonexistent_user(self, client):
        """Test login with non-existent username."""
        login_data = {
            'username': 'nonexistent',
            'password': 'password'
        }
        response = client.post('/auth/token', json=login_data)
        
        assert response.status_code == 401
        data = response.get_json()
        assert data['detail'] == "Incorrect username or password"
        
    def test_login_missing_credentials(self, client):
        """Test login with missing credentials."""
        test_cases = [
            {},  # No credentials
            {'username': 'test'},  # Missing password
            {'password': 'test'},  # Missing username
        ]
        
        for incomplete_data in test_cases:
            response = client.post('/auth/token', json=incomplete_data)
            assert response.status_code == 400
            data = response.get_json()
            assert data['detail'] == "Missing username or password"
            
    def test_login_form_data(self, client, sample_user):
        """Test login with form data instead of JSON."""
        # Register user first
        client.post('/auth/register', json=sample_user)
        
        # Login with form data
        response = client.post('/auth/token', data={
            'username': sample_user['username'],
            'password': sample_user['password']
        })
        
        assert response.status_code == 200
        data = response.get_json()
        assert 'access_token' in data


class TestGetCurrentUser:
    """Test get current user endpoint."""
    
    def test_get_current_user_success(self, client, auth_headers, sample_user):
        """Test getting current user info with valid token."""
        headers = auth_headers()
        response = client.get('/auth/me', headers=headers)
        
        assert response.status_code == 200
        data = response.get_json()
        
        assert data['username'] == 'testuser'
        assert data['email'] == 'testuser@test.com'
        assert data['is_active'] == True
        assert 'id' in data
        
    def test_get_current_user_no_token(self, client):
        """Test getting current user without authentication token."""
        response = client.get('/auth/me')
        
        assert response.status_code == 401
        
    def test_get_current_user_invalid_token(self, client):
        """Test getting current user with invalid token."""
        headers = {'Authorization': 'Bearer invalid-token'}
        response = client.get('/auth/me', headers=headers)
        
        assert response.status_code == 422  # Unprocessable Entity for invalid JWT
        
    def test_get_current_user_malformed_header(self, client):
        """Test getting current user with malformed authorization header."""
        headers = {'Authorization': 'InvalidFormat token'}
        response = client.get('/auth/me', headers=headers)
        
        assert response.status_code == 401


class TestAuthenticationFlow:
    """Test complete authentication flow."""
    
    def test_full_auth_flow(self, client):
        """Test complete registration -> login -> authenticated request flow."""
        # 1. Register a new user
        user_data = {
            'username': 'flowtest',
            'email': 'flowtest@example.com',
            'password': 'securepass123'
        }
        
        register_response = client.post('/auth/register', json=user_data)
        assert register_response.status_code == 201
        
        # 2. Login with the new user
        login_data = {
            'username': user_data['username'],
            'password': user_data['password']
        }
        
        login_response = client.post('/auth/token', json=login_data)
        assert login_response.status_code == 200
        
        token = login_response.get_json()['access_token']
        
        # 3. Use the token to access protected endpoint
        headers = {'Authorization': f'Bearer {token}'}
        me_response = client.get('/auth/me', headers=headers)
        
        assert me_response.status_code == 200
        user_info = me_response.get_json()
        assert user_info['username'] == user_data['username']
        assert user_info['email'] == user_data['email']


class TestPasswordSecurity:
    """Test password security features."""
    
    def test_password_not_returned(self, client, sample_user):
        """Test that password is never returned in responses."""
        # Register user
        register_response = client.post('/auth/register', json=sample_user)
        register_data = register_response.get_json()
        
        # Check registration response doesn't contain password
        assert 'password' not in register_data
        
        # Login and get user info
        login_response = client.post('/auth/token', json={
            'username': sample_user['username'],
            'password': sample_user['password']
        })
        token = login_response.get_json()['access_token']
        
        headers = {'Authorization': f'Bearer {token}'}
        me_response = client.get('/auth/me', headers=headers)
        me_data = me_response.get_json()
        
        # Check user info response doesn't contain password
        assert 'password' not in me_data
        
    def test_password_hashing(self, app, sample_user):
        """Test that passwords are properly hashed in database."""
        with app.app_context():
            user = User(
                username=sample_user['username'],
                email=sample_user['email']
            )
            user.set_password(sample_user['password'])

            # Password should be hashed, not stored as plaintext
            assert user.hashed_password != sample_user['password']
            assert user.hashed_password is not None
            assert len(user.hashed_password) > 20  # Hashed password should be longer