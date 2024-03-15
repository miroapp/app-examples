/* eslint-disable no-undef */
// check eslint global config
import "./assets/style.css";

var loginBtn = document.getElementById("loginButton");
var logoutBtn = document.getElementById("logoutButton");
var loginText = document.getElementById("loginText");

// Attach click event listeners
loginBtn.addEventListener("click", startOAuthFlow);
logoutBtn.addEventListener("click", handleLogout);

// Add an event listener to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  // Call the initialize function when the DOM content is loaded
  initialize();
});

// Define a function containing the code you want to run each time index.html is opened
async function initialize() {
  logoutBtn.style.display = "none";
  await isLoggedIn();
}

// This function displays the user login status on the UI
async function displayLoginStatus(loggedIn) {
  try {
    var statusParagraph = document.getElementById("loginStatus");

    if (loggedIn) {
      statusParagraph.textContent =
        "✅ User is logged in. " +
        "🔄 If you want to run this flow again, use the logout button.";

      // Hide the login button and show the logout button
      loginBtn.style.display = "none";
      loginText.style.display = "none";
      logoutBtn.style.display = "block";
    } else {
      statusParagraph.textContent = "❌ User is not logged in ❌";
      loginBtn.style.display = "block";
    }
    return;
  } catch (error) {
    console.log(error);
  }
}

// This function checks the local storage for the user's id. Local storage is just for demo purposes.
// It is recommended to implement your own storage for a production application.
async function isLoggedIn() {
  try {
    // Check if the user is logged in by checking the local storage on the browser
    const loggedIn = localStorage.isLoggedIn;

    // Check if the currentId exists in the loggedInUserIds array
    await displayLoginStatus(loggedIn);
    return;
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error);
    return false; // Handle errors gracefully
  }
}

//this function opens a new browser tab to start the OAuth process
//we then add an event listener to the window to listen for the message from the backend for once the OAuth flow is completed
async function startOAuthFlow() {
  try {
    const response = await fetch("http://localhost:4000");
    let OAuthURL = await response.json();
    window.open(OAuthURL, "_blank");

    // Add an event listener to receive messages from the backend, it will be called after the OAuth flow is completed
    window.addEventListener("message", async function (event) {
      const redirectSuccess = event.data.redirectSuccess;
      if (typeof redirectSuccess === "undefined") {
        return;
      } else if (redirectSuccess) {
        this.localStorage.isLoggedIn = true;
        await isLoggedIn();
      } else {
        console.log("Redirect failed");
        return;
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Handle the logout by clearing the local storage and updating the UI to display the login button
async function handleLogout() {
  try {
    await localStorage.clear();
    logoutBtn.style.display = "none";
    await displayLoginStatus(false);
    return;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
