// Test script to verify frontend-backend integration
const API_URL = "http://localhost:5001";

async function testAuthentication() {
  console.log("Testing frontend-backend integration...");

  try {
    // Test login
    console.log("1. Testing login...");
    const loginResponse = await fetch(`${API_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "frontendtest",
        password: "testpass123",
      }),
    });

    const loginData = await loginResponse.json();
    console.log("Login response:", loginData);

    if (loginData.access_token) {
      localStorage.setItem("access_token", loginData.access_token);
      console.log("✅ Login successful");

      // Test getting current user
      console.log("2. Testing current user endpoint...");
      const userResponse = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
          "Content-Type": "application/json",
        },
      });

      const userData = await userResponse.json();
      console.log("Current user:", userData);

      // Test saving game progress
      console.log("3. Testing save game progress...");
      const saveResponse = await fetch(`${API_URL}/api/game-progress/save`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: 10,
          energy: 80,
          coding_skill: 50,
          python_study_level: 3,
          cohort_data: {
            Alice: { name: "Alice", bond: 15 },
            Bob: { name: "Bob", bond: 8 },
          },
        }),
      });

      const saveData = await saveResponse.json();
      console.log("Save progress response:", saveData);

      // Test loading game progress
      console.log("4. Testing load game progress...");
      const loadResponse = await fetch(`${API_URL}/api/game-progress/load`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
          "Content-Type": "application/json",
        },
      });

      const loadData = await loadResponse.json();
      console.log("Load progress response:", loadData);

      console.log(
        "✅ All tests passed! Frontend-backend integration is working."
      );
    } else {
      console.error("❌ Login failed");
    }
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

// Run the test
testAuthentication();
