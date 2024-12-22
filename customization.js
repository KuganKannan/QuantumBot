// script.js

// Load user profile when the page loads
document.addEventListener("DOMContentLoaded", loadUserProfile);

document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    saveUserProfile();
    loadUserProfile();
  });

// Save user profile to local storage
function saveUserProfile() {
  const name = document.getElementById("name").value;
  const theme = document.getElementById("theme").value;

  const userProfile = {
    name: name,
    theme: theme,
  };

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  alert("Profile saved!");
}

// Load user profile from local storage
function loadUserProfile() {
  const profileData = localStorage.getItem("userProfile");

  if (profileData) {
    const userProfile = JSON.parse(profileData);

    // Display a personalized greeting
    document.getElementById(
      "greeting"
    ).innerText = `Hello, ${userProfile.name}! Welcome back to QuantumBot.`;

    // Apply theme preference
    applyTheme(userProfile.theme);

    // Hide the form if profile is already saved
    document.getElementById("user-form").style.display = "none";
  }
}

// Apply theme based on user preference
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  } else if (theme === "light") {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}

// Clear user profile from local storage
function clearProfile() {
  localStorage.removeItem("userProfile");
  document.getElementById("greeting").innerText = "";
  document.getElementById("user-form").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("theme").value = "default";
  applyTheme("default");
}
