document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // List of valid usernames and passwords
    const validUsers = {
        "Yashwanth Gowda KS": "hack25",
        "Srinivas DR": "hack22",
        "Swaroop M": "hack23",
        "Lalith Raj R": "hack21",
    };

    // Check if the username exists and the password matches
    if (validUsers[username] === password) {
        // Display a personalized welcome message
        alert(`Welcome to Team Polaris online office, ${username} sir`);
        // Redirect to the home page
        window.location.href = "home.html"; // Change this to the actual home page URL
    } else {
        alert("Invalid username or password!");
    }
});

