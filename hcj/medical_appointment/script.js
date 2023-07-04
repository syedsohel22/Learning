const navLinks = document.querySelectorAll("nav ul li a");
const contentDiv = document.getElementById("content");
const formsContainer = document.getElementById("forms-container");
const toggleFormLink = document.querySelectorAll("#toggle-form");

// Function to load content dynamically
function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      handleForms();
    });
}





// Function to toggle between login and signup forms
function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
  signupForm.style.display =
    signupForm.style.display === "none" ? "block" : "none";
}

// Function to handle form submissions
function handleForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    loginUser(email, password);
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const isDoctor = document.getElementById("signup-doctor").checked;
    registerUser(username, email, password, isDoctor);
  });

  toggleFormLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      toggleForms();
    });
  });
}

// Function to register a new user
function registerUser(username, email, password, isDoctor) {
  const user = {
    username,
    email,
    password,
    isDoctor,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User registered successfully:", data);
      // Redirect the user to the appropriate page
      if (isDoctor) {
        loadContent("dashboard.html");
      } else {
        loadContent("book.html");
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
}

// Function to login a user
function loginUser(email, password) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        console.log("Login successful");
        alert("Login successful");
        if (user.isDoctor) {
          loadContent("dashboard.html");
        } else {
          loadContent("book.html");
        }
      } else {
        console.log("Login failed");
        alert("Login failed");
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
}

// Add click event listeners to the navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const url = link.getAttribute("href");
    loadContent(url);
  });
});

// Load the home page by default
loadContent("home.html");
