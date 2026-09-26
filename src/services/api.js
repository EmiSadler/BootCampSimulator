// Use environment variable for API URL, with fallback for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const getToken = () => localStorage.getItem("access_token");

const authHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});

// POST a JSON body without authentication (register / login)
const postJSON = (path, body) =>
  fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

// Request an endpoint that needs the logged-in user's token
const authRequest = (path, { method, token, body }) =>
  fetch(`${API_URL}${path}`, {
    method,
    headers: authHeaders(token),
    ...(body !== undefined && { body: JSON.stringify(body) }),
  });

/**
 * Authentication and game progress API calls
 */
export const gameAPI = {
  // Check if user is logged in
  isLoggedIn: () => {
    return !!getToken();
  },

  // Get current user info
  getCurrentUser: async () => {
    const token = getToken();
    if (!token) return null;

    try {
      const response = await authRequest("/auth/me", {
        method: "GET",
        token,
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
      const response = await postJSON("/auth/register", {
        username,
        email,
        password,
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
      const response = await postJSON("/auth/token", { username, password });

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
    const token = getToken();

    if (!token) {
      console.log("No token found, cannot save progress");
      return false;
    }

    try {
      const response = await authRequest("/api/game-progress/save", {
        method: "POST",
        token,
        body: gameData,
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
    const token = getToken();

    if (!token) {
      console.log("No token found, cannot load progress");
      return null;
    }

    try {
      const response = await authRequest("/api/game-progress/load", {
        method: "GET",
        token,
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
    const token = getToken();

    if (!token) {
      console.log("No token found, cannot delete progress");
      return false;
    }

    try {
      const response = await authRequest("/api/game-progress/delete", {
        method: "DELETE",
        token,
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
