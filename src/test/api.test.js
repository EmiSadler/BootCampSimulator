import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { authAPI, gameAPI } from "../services/api";
import { mockApiResponses, mockFetch } from "./testUtils.jsx";

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = mockLocalStorage;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

describe("Authentication API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("register", () => {
    it("successfully registers a new user", async () => {
      mockFetch(mockApiResponses.register.success, 201);

      const result = await authAPI.register(
        "testuser",
        "test@example.com",
        "password123"
      );

      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:5001/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "testuser",
            email: "test@example.com",
            password: "password123",
          }),
        }
      );

      expect(result).toEqual(mockApiResponses.register.success);
    });

    it("handles registration error", async () => {
      mockFetch(mockApiResponses.register.error, 400);

      try {
        await authAPI.register(
          "existinguser",
          "test@example.com",
          "password123"
        );
      } catch (error) {
        expect(error.message).toContain("Username already exists");
      }
    });
  });

  describe("login", () => {
    it("successfully logs in user and stores token", async () => {
      mockFetch(mockApiResponses.login.success, 200);

      const result = await authAPI.login("testuser", "password123");

      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:5001/auth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "testuser",
            password: "password123",
          }),
        }
      );

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        "access_token",
        "mock-jwt-token"
      );
      expect(result).toEqual(mockApiResponses.login.success);
    });

    it("handles login error", async () => {
      mockFetch(mockApiResponses.login.error, 401);

      try {
        await authAPI.login("wronguser", "wrongpass");
      } catch (error) {
        expect(error.message).toContain("Invalid credentials");
      }
    });
  });

  describe("logout", () => {
    it("removes token from localStorage", () => {
      authAPI.logout();

      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("access_token");
    });
  });

  describe("isLoggedIn", () => {
    it("returns true when token exists", () => {
      mockLocalStorage.getItem.mockReturnValue("mock-token");

      const result = authAPI.isLoggedIn();

      expect(result).toBe(true);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("access_token");
    });

    it("returns false when no token exists", () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      const result = authAPI.isLoggedIn();

      expect(result).toBe(false);
    });
  });

  describe("getCurrentUser", () => {
    it("returns user data when authenticated", async () => {
      mockLocalStorage.getItem.mockReturnValue("mock-token");
      mockFetch(mockApiResponses.login.success.user, 200);

      const result = await authAPI.getCurrentUser();

      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:5001/auth/me",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer mock-token",
            "Content-Type": "application/json",
          },
        }
      );

      expect(result).toEqual(mockApiResponses.login.success.user);
    });

    it("returns null when no token exists", async () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      const result = await authAPI.getCurrentUser();

      expect(result).toBe(null);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("removes invalid token and returns null on 401", async () => {
      mockLocalStorage.getItem.mockReturnValue("invalid-token");
      global.fetch = vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 401,
        })
      );

      const result = await authAPI.getCurrentUser();

      expect(result).toBe(null);
    });

    it("handles network errors gracefully", async () => {
      mockLocalStorage.getItem.mockReturnValue("mock-token");
      global.fetch = vi.fn(() => Promise.reject(new Error("Network error")));

      const result = await authAPI.getCurrentUser();

      expect(result).toBe(null);
    });
  });
});

describe("Game API", () => {
  const gameData = { day: 3, energy: 80, coding_skill: 12 };

  const authHeaders = (token) => ({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.getItem.mockReset();
    global.fetch = vi.fn();
    // The service logs successes and failures; keep test output quiet
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const withToken = (token = "mock-token") =>
    mockLocalStorage.getItem.mockReturnValue(token);
  const withoutToken = () => mockLocalStorage.getItem.mockReturnValue(null);
  const failNetwork = () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("Network error")));
  };

  describe("isLoggedIn", () => {
    it("returns true when token exists", () => {
      withToken();

      const result = gameAPI.isLoggedIn();

      expect(result).toBe(true);
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith("access_token");
    });

    it("returns false when no token exists", () => {
      withoutToken();

      expect(gameAPI.isLoggedIn()).toBe(false);
    });
  });

  describe("register", () => {
    it("posts the new user and returns true on success", async () => {
      mockFetch(mockApiResponses.register.success, 201);

      const result = await gameAPI.register(
        "testuser",
        "test@example.com",
        "password123"
      );

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "testuser",
          email: "test@example.com",
          password: "password123",
        }),
      });
    });

    it("throws the server's detail message when registration fails", async () => {
      mockFetch(mockApiResponses.register.error, 400);

      await expect(
        gameAPI.register("existinguser", "test@example.com", "password123")
      ).rejects.toThrow("Username already exists");
    });

    it("throws a default message when the server gives no detail", async () => {
      mockFetch({}, 500);

      await expect(
        gameAPI.register("testuser", "test@example.com", "password123")
      ).rejects.toThrow("Registration failed");
    });

    it("rethrows network errors", async () => {
      failNetwork();

      await expect(
        gameAPI.register("testuser", "test@example.com", "password123")
      ).rejects.toThrow("Network error");
    });
  });

  describe("login", () => {
    it("posts the credentials, stores the token and returns true", async () => {
      mockFetch(mockApiResponses.login.success, 200);

      const result = await gameAPI.login("testuser", "password123");

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "testuser", password: "password123" }),
      });
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        "access_token",
        "mock-jwt-token"
      );
    });

    it("returns false and stores nothing when the credentials are wrong", async () => {
      mockFetch(mockApiResponses.login.error, 401);

      const result = await gameAPI.login("wronguser", "wrongpass");

      expect(result).toBe(false);
      expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
    });

    it("returns false on network errors instead of throwing", async () => {
      failNetwork();

      await expect(gameAPI.login("testuser", "password123")).resolves.toBe(
        false
      );
      expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe("logout", () => {
    it("removes the token from localStorage", () => {
      gameAPI.logout();

      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("access_token");
    });
  });

  describe("getCurrentUser", () => {
    it("returns the user when authenticated", async () => {
      withToken();
      mockFetch(mockApiResponses.login.success.user, 200);

      const result = await gameAPI.getCurrentUser();

      expect(result).toEqual(mockApiResponses.login.success.user);
      expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/auth/me`, {
        method: "GET",
        headers: authHeaders("mock-token"),
      });
    });

    it("returns null without calling the server when there is no token", async () => {
      withoutToken();

      expect(await gameAPI.getCurrentUser()).toBeNull();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("returns null when the token is rejected (401)", async () => {
      withToken("expired-token");
      mockFetch({ detail: "Token expired" }, 401);

      expect(await gameAPI.getCurrentUser()).toBeNull();
    });

    it("returns null on other server errors", async () => {
      withToken();
      mockFetch({}, 500);

      expect(await gameAPI.getCurrentUser()).toBeNull();
    });

    it("returns null on network errors", async () => {
      withToken();
      failNetwork();

      expect(await gameAPI.getCurrentUser()).toBeNull();
    });
  });

  describe("saveProgress", () => {
    it("posts the game data with the token and returns the response", async () => {
      withToken();
      mockFetch(mockApiResponses.gameProgress.save, 200);

      const result = await gameAPI.saveProgress(gameData);

      expect(result).toEqual(mockApiResponses.gameProgress.save);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_URL}/api/game-progress/save`,
        {
          method: "POST",
          headers: authHeaders("mock-token"),
          body: JSON.stringify(gameData),
        }
      );
    });

    it("returns false without calling the server when there is no token", async () => {
      withoutToken();

      expect(await gameAPI.saveProgress(gameData)).toBe(false);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("returns false when the server rejects the save", async () => {
      withToken();
      mockFetch({ detail: "No data provided" }, 400);

      expect(await gameAPI.saveProgress(gameData)).toBe(false);
    });

    it("returns false on network errors", async () => {
      withToken();
      failNetwork();

      expect(await gameAPI.saveProgress(gameData)).toBe(false);
    });
  });

  describe("loadProgress", () => {
    it("returns the saved game", async () => {
      withToken();
      mockFetch(mockApiResponses.gameProgress.load, 200);

      const result = await gameAPI.loadProgress();

      expect(result).toEqual(mockApiResponses.gameProgress.load);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_URL}/api/game-progress/load`,
        { method: "GET", headers: authHeaders("mock-token") }
      );
    });

    it("returns null without calling the server when there is no token", async () => {
      withoutToken();

      expect(await gameAPI.loadProgress()).toBeNull();
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("returns null when there is no saved game (404)", async () => {
      withToken();
      mockFetch({}, 404);

      expect(await gameAPI.loadProgress()).toBeNull();
    });

    it("returns null on other server errors", async () => {
      withToken();
      mockFetch({}, 500);

      expect(await gameAPI.loadProgress()).toBeNull();
    });

    it("returns null on network errors", async () => {
      withToken();
      failNetwork();

      expect(await gameAPI.loadProgress()).toBeNull();
    });
  });

  describe("deleteProgress", () => {
    it("deletes the saved game and returns true", async () => {
      withToken();
      mockFetch(mockApiResponses.gameProgress.delete, 200);

      expect(await gameAPI.deleteProgress()).toBe(true);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_URL}/api/game-progress/delete`,
        { method: "DELETE", headers: authHeaders("mock-token") }
      );
    });

    it("returns false without calling the server when there is no token", async () => {
      withoutToken();

      expect(await gameAPI.deleteProgress()).toBe(false);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it("returns false when the server rejects the delete", async () => {
      withToken();
      mockFetch({}, 404);

      expect(await gameAPI.deleteProgress()).toBe(false);
    });

    it("returns false on network errors", async () => {
      withToken();
      failNetwork();

      expect(await gameAPI.deleteProgress()).toBe(false);
    });
  });
});
