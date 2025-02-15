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

    
// Function to validate the password in real-time999
function validatePassword() {
  const password = document.getElementById("signup-password").value;

  const minLength = /^(?=.{8,})/; // Minimum 8 characters
  const number = /\d/; // At least one number
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
  const letters = /[a-zA-Z]/; // At least one letter

  const lengthRule = document.getElementById("length-rule");
  const numberRule = document.getElementById("number-rule");
  const specialCharRule = document.getElementById("special-char-rule");
  const letterRule = document.getElementById("letter-rule");

  const isLengthValid = minLength.test(password);
  const isNumberValid = number.test(password);
  const isSpecialCharValid = specialChar.test(password);
  const isLetterValid = letters.test(password);

  // Update the feedback for each rule
  if (isLengthValid) {
    lengthRule.classList.add("valid");
  } else {
    lengthRule.classList.remove("valid");
  }

  if (isNumberValid) {
    numberRule.classList.add("valid");
  } else {
    numberRule.classList.remove("valid");
  }

  if (isSpecialCharValid) {
    specialCharRule.classList.add("valid");
  } else {
    specialCharRule.classList.remove("valid");
  }

  if (isLetterValid) {
    letterRule.classList.add("valid");
  } else {
    letterRule.classList.remove("valid");
  }

  // Enable the signup button only if all rules are valid99
  const signupButton = document.getElementById("signup-button");
  if (isLengthValid && isNumberValid && isSpecialCharValid && isLetterValid) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
}

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
