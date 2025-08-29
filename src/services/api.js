const API_URL = "https://bootcampsimulator.sadlers.cloud";

/**
 * Authentication API calls
 */
export const authAPI = {
  // Register a new user
  register: async (username, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    return handleResponse(response);
  },

  // Login user
  login: async (username, password) => {
    const response = await fetch(`${API_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await handleResponse(response);

    // Save token to localStorage
    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
    }

    return data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("access_token");
  },

  // Check if user is logged in
  isLoggedIn: () => {
    const token = localStorage.getItem("access_token");
    return !!token;
  },

  // Get current user info
  getCurrentUser: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return null;

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        return await response.json();
      }

      // If token is invalid, remove it
      if (response.status === 401) {
        localStorage.removeItem("token");
      }

      return null;
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  },
};

/**
 * Game progress API calls
 */
export const gameAPI = {
  // Check if user is logged in
  isLoggedIn: () => {
    const token = localStorage.getItem("access_token");
    return !!token;
  },

  // Get current user info
  getCurrentUser: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return null;

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        return await response.json();
      }

      // If token is invalid, remove it
      if (response.status === 401) {
        localStorage.removeItem("token");
      }

      return null;
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  },

  // Register new user
  register: async (username, email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful");
        return true;
      } else {
        throw new Error(data.detail || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  // Login user
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        console.log("Login successful");
        return true;
      } else {
        console.error("Login failed:", data.detail);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("access_token");
  },

  // Save game progress
  saveProgress: async (gameData) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.log("No token found, cannot save progress");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/api/game-progress/save`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Game progress saved successfully");
        return data;
      } else {
        console.error("Failed to save game progress");
        return false;
      }
    } catch (error) {
      console.error("Error saving game progress:", error);
      return false;
    }
  },

  // Load game progress
  loadProgress: async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.log("No token found, cannot load progress");
      return null;
    }

    try {
      const response = await fetch(`${API_URL}/api/game-progress/load`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // If the request was successful (status code 200-299)
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      // Handle 404 (no saved game) - return empty object instead of throwing
      if (response.status === 404) {
        console.log("No saved game found");
        return null;
      }

      // For other errors, throw
      console.error("Error loading game progress:", response.statusText);
      return null;
    } catch (error) {
      console.error("Error in loadProgress:", error);
      return null; // Return null instead of throwing to prevent component crashes
    }
  },

  // Delete game progress (restart game)
  deleteProgress: async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.log("No token found, cannot delete progress");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/api/game-progress/delete`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Game progress deleted successfully");
        return true;
      } else {
        console.error("Failed to delete game progress");
        return false;
      }
    } catch (error) {
      console.error("Error deleting game progress:", error);
      return false;
    }
  },
};

// Helper function to handle API responses
async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    const error = data.detail || response.statusText;
    throw new Error(error);
  }

  return data;
}
