// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzUgmMUUTDsS3xyafsfgG-mU4tmixPnOM",
    authDomain: "login-2f9f5.firebaseapp.com",
    projectId: "login-2f9f5",
    storageBucket: "login-2f9f5.firebasestorage.app",
    messagingSenderId: "91265561324",
    appId: "1:91265561324:web:0a1d46392693bd4567ebc9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to sign up a user
async function signUpUser(email, password) {
  const messageElement = document.getElementById("message");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully:", userCredential.user);
    messageElement.style.color = "green";
    messageElement.textContent = "Signup successful! You can now log in.";
  } catch (error) {
    console.error("Error signing up:", error.message);
    messageElement.style.color = "red";
    messageElement.textContent = "Signup failed: " + error.message;
  }
}

// Function to log in a user
async function loginUser(email, password) {
  const messageElement = document.getElementById("message");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", userCredential.user);
    messageElement.style.color = "green";
    messageElement.textContent = "Login successful! Welcome back.";
  } catch (error) {
    console.error("Error logging in:", error.message);
    messageElement.style.color = "red";
    messageElement.textContent =
      "Login failed: " + (error.code === "auth/wrong-password"
        ? "Incorrect password."
        : error.message);
  }
}

// Add event listeners for signup and login buttons
document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signUpButton");
  const loginButton = document.getElementById("loginButton");

  signUpButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      signUpUser(email, password);
    } else {
      const messageElement = document.getElementById("message");
      messageElement.style.color = "red";
      messageElement.textContent = "Please provide both email and password.";
    }
  });

  loginButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      loginUser(email, password);
    } else {
      const messageElement = document.getElementById("message");
      messageElement.style.color = "red";
      messageElement.textContent = "Please provide both email and password.";
    }
  });
});
