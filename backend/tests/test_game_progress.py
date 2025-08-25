import pytest
import json
from models.user import User
from models.game_progress import GameProgress
from database.db import db


class TestGameProgressSave:
    """Test game progress save endpoint."""
    
    def test_save_progress_success(self, client, auth_headers):
        """Test successful game progress saving."""
        headers = auth_headers()
        
        game_data = {
            'day': 5,
            'energy': 75,
            'coding_skill': 25,
            'python_study_level': 3,
            'coding_challenge_level': 2,
            'last_coding_activity_day': 5,
            'cohort_data': {'bonds': {'Alice': 10, 'Bob': -5}},
            'discovered_info': {'Alice': {'hobby': True}}
        }
        
        response = client.post('/api/game-progress/save',
                              json=game_data,
                              headers=headers)
        
        assert response.status_code == 200
        data = response.get_json()
        
        assert data['day'] == game_data['day']
        assert data['energy'] == game_data['energy']
        assert data['coding_skill'] == game_data['coding_skill']
        assert 'id' in data
        
    def test_save_progress_unauthorized(self, client):
        """Test saving progress without authentication."""
        game_data = {'day': 1, 'energy': 100}
        
        response = client.post('/api/game-progress/save', json=game_data)
        
        assert response.status_code == 401
        
    def test_save_progress_no_data(self, client, auth_headers):
        """Test saving progress with no data."""
        headers = auth_headers()
        headers['Content-Type'] = 'application/json'

        response = client.post('/api/game-progress/save', headers=headers)

        assert response.status_code == 400
        # Check if response has JSON data before accessing it
        if response.content_type and 'application/json' in response.content_type:
            data = response.get_json()
            assert data is not None
            assert data['detail'] == "No data provided"
        
    def test_save_progress_update_existing(self, client, auth_headers):
        """Test updating existing progress."""
        headers = auth_headers()
        
        # Save initial progress
        initial_data = {
            'day': 1,
            'energy': 100,
            'coding_skill': 0
        }
        
        response1 = client.post('/api/game-progress/save',
                               json=initial_data,
                               headers=headers)
        assert response1.status_code == 200
        
        # Update progress
        updated_data = {
            'day': 3,
            'energy': 80,
            'coding_skill': 15
        }
        
        response2 = client.post('/api/game-progress/save',
                               json=updated_data,
                               headers=headers)
        
        assert response2.status_code == 200
        data = response2.get_json()
        
        assert data['day'] == updated_data['day']
        assert data['energy'] == updated_data['energy']
        assert data['coding_skill'] == updated_data['coding_skill']


class TestGameProgressLoad:
    """Test game progress load endpoint."""
    
    def test_load_progress_success(self, client, auth_headers):
        """Test successful game progress loading."""
        headers = auth_headers()
        
        # Save some progress first
        game_data = {
            'day': 7,
            'energy': 60,
            'coding_skill': 30,
            'cohort_data': {'bonds': {'Charlie': 20}}
        }
        
        client.post('/api/game-progress/save',
                   json=game_data,
                   headers=headers)
        
        # Load the progress
        response = client.get('/api/game-progress/load', headers=headers)
        
        assert response.status_code == 200
        data = response.get_json()
        
        assert data['day'] == game_data['day']
        assert data['energy'] == game_data['energy']
        assert data['coding_skill'] == game_data['coding_skill']
        assert data['cohort_data'] == game_data['cohort_data']
        
    def test_load_progress_no_saved_game(self, client, auth_headers):
        """Test loading progress when no game is saved."""
        headers = auth_headers()
        
        response = client.get('/api/game-progress/load', headers=headers)
        
        assert response.status_code == 404
        
    def test_load_progress_unauthorized(self, client):
        """Test loading progress without authentication."""
        response = client.get('/api/game-progress/load')
        
        assert response.status_code == 401


class TestGameProgressDelete:
    """Test game progress delete endpoint."""
    
    def test_delete_progress_success(self, client, auth_headers):
        """Test successful game progress deletion."""
        headers = auth_headers()
        
        # Save some progress first
        game_data = {'day': 10, 'energy': 50, 'coding_skill': 40}
        
        client.post('/api/game-progress/save',
                   json=game_data,
                   headers=headers)
        
        # Delete the progress
        response = client.delete('/api/game-progress/delete', headers=headers)
        
        assert response.status_code == 200
        data = response.get_json()
        assert data['message'] == "Game progress deleted successfully"
        
        # Verify it's actually deleted
        load_response = client.get('/api/game-progress/load', headers=headers)
        assert load_response.status_code == 404
        
    def test_delete_progress_no_saved_game(self, client, auth_headers):
        """Test deleting progress when no game is saved."""
        headers = auth_headers()
        
        response = client.delete('/api/game-progress/delete', headers=headers)
        
        assert response.status_code == 404
        data = response.get_json()
        assert data['message'] == "No saved game progress found"
        
    def test_delete_progress_unauthorized(self, client):
        """Test deleting progress without authentication."""
        response = client.delete('/api/game-progress/delete')
        
        assert response.status_code == 401


class TestGameProgressIntegration:
    """Test complete game progress workflow."""
    
    def test_full_game_progress_flow(self, client, auth_headers):
        """Test complete save -> load -> update -> delete flow."""
        headers = auth_headers()
        
        # 1. Save initial progress
        initial_data = {
            'day': 1,
            'energy': 100,
            'coding_skill': 0,
            'cohort_data': {'bonds': {}},
            'discovered_info': {}
        }
        
        save_response = client.post('/api/game-progress/save',
                                   json=initial_data,
                                   headers=headers)
        assert save_response.status_code == 200
        
        # 2. Load the progress
        load_response = client.get('/api/game-progress/load', headers=headers)
        assert load_response.status_code == 200
        loaded_data = load_response.get_json()
        
        assert loaded_data['day'] == initial_data['day']
        assert loaded_data['energy'] == initial_data['energy']
        
        # 3. Update progress
        updated_data = {
            'day': 5,
            'energy': 70,
            'coding_skill': 25,
            'cohort_data': {'bonds': {'Alice': 15}},
            'discovered_info': {'Alice': {'expertise': True}}
        }
        
        update_response = client.post('/api/game-progress/save',
                                     json=updated_data,
                                     headers=headers)
        assert update_response.status_code == 200
        
        # 4. Load updated progress
        load_updated_response = client.get('/api/game-progress/load', headers=headers)
        updated_loaded_data = load_updated_response.get_json()
        
        assert updated_loaded_data['day'] == updated_data['day']
        assert updated_loaded_data['coding_skill'] == updated_data['coding_skill']
        
        # 5. Delete progress
        delete_response = client.delete('/api/game-progress/delete', headers=headers)
        assert delete_response.status_code == 200
        
        # 6. Verify deletion
        final_load_response = client.get('/api/game-progress/load', headers=headers)
        assert final_load_response.status_code == 404