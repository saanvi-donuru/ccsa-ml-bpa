// Function to show the signup form
function showSignup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// Function to show the login form
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

// Function to handle signup
function signup(event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Check if user already exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    // Add new user to localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');
    showLogin();
}

// Function to handle login
function login(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect or show the user dashboard
        window.location.href = "index.html"; // Example: Redirect to a dashboard page
    } else {
        alert('Invalid username or password.');
    }
}

// Show the signup form by default
showSignup();
