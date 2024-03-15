/* eslint-disable no-undef */
import "./assets/style.css";

var loginBtn = document.getElementById("loginButton");
var loginText = document.getElementById("loginText");

// Attach click event listener to the button
loginBtn.addEventListener("click", startOAuthFlow);

// Add an event listener to the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  // Call the initialize function when the DOM content is loaded
  initialize();
});

// Define a function containing the code you want to run each time index.html is opened
async function initialize() {
  await isLoggedIn();
}

// This function checks the local storage for the user's id. Local storage is just for demo purposes.
// It is recommended to implement your own storage for a production application.
// The function then displays the user login status on the UI.
async function isLoggedIn() {
  try {
    // Call the miro.board.getUserInfo() method to get the user's information
    const userInfo = await miro.board.getUserInfo();
    //parse userInfo call for the user's id
    const currentUserId = userInfo.id;
    const response = await fetch("src/backend/store.json");

    // Parse the JSON response
    const data = await response.json();

    // Check if the currentId exists in the loggedInUserIds array
    const isLoggedIn = data.loggedInUserIds.includes(currentUserId);
    var statusParagraph = document.getElementById("loginStatus");

    if (isLoggedIn) {
      statusParagraph.textContent =
        "✅ User is logged in ✅ If you want to run this flow again, delete " +
        "your user id from the store.json file.";
      // Hide the login button and login text if the user is logged in
      loginBtn.style.display = "none";
      loginText.style.display = "none";
    } else {
      statusParagraph.textContent = "❌ User is not logged in ❌";
    }
    return;
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error);
    return false; // Handle errors gracefully
  }
}

async function startOAuthFlow() {
  try {
    const token = await miro.board.getIdToken();
    // Make a fetch request to your backend endpoint
    const response = await fetch("http://localhost:4000/", {
      method: "GET", // Send as GET request
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
      },
    });
    let OAuthURL = await response.json();
    window.open(OAuthURL, "_blank");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Add an event listener to receive messages from the backend, it will be called after the OAuth flow is completed
window.addEventListener("message", async function (event) {
  try {
    console.log("event");
    console.log(event);
    console.log(event.data);
    const redirectSuccess = event.data;
    if (redirectSuccess) {
      // await isLoggedIn();
    } else {
      var statusParagraph = document.getElementById("loginStatus");
      statusParagraph.textContent =
        "❌ Redirect unsucessful, delete your userID from store.json and try again ❌";
    }
  } catch (error) {
    console.log(error);
  }
});
