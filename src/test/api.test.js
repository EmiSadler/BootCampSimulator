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
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  describe("isLoggedIn", () => {
    it("returns true when token exists", () => {
      mockLocalStorage.getItem.mockReturnValue("mock-token");

      const result = gameAPI.isLoggedIn();

      expect(result).toBe(true);
    });

    it("returns false when no token exists", () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      const result = gameAPI.isLoggedIn();

      expect(result).toBe(false);
    });
  });
});
