import { render } from "@testing-library/react";

// Custom render function for testing
export function customRender(ui, options = {}) {
  return render(ui, options);
}

// Mock user data for tests
export const mockUser = {
  id: 1,
  username: "testuser",
  email: "test@example.com",
};

// Mock game progress data
export const mockGameProgress = {
  day: 5,
  energy: 75,
  coding_score: 60,
  social_bonds: { Alice: 80, Bob: 65, Charlie: 90 },
  completed_challenges: ["challenge1", "challenge2"],
  current_cohort: ["Alice", "Bob", "Charlie", "Diana"],
};

// Mock API responses
export const mockApiResponses = {
  login: {
    success: {
      access_token: "mock-jwt-token",
      user: mockUser,
    },
    error: {
      detail: "Invalid credentials",
    },
  },
  register: {
    success: {
      message: "User created successfully",
      user: mockUser,
    },
    error: {
      detail: "Username already exists",
    },
  },
  gameProgress: {
    load: mockGameProgress,
    save: { message: "Progress saved successfully" },
    delete: { message: "Progress deleted successfully" },
  },
};

// Helper to setup fetch mocks
export function mockFetch(response, status = 200) {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
    })
  );
}

// Helper to setup localStorage with token
export function mockAuthenticatedUser() {
  localStorage.setItem("authToken", "mock-jwt-token");
  localStorage.setItem("userData", JSON.stringify(mockUser));
}
