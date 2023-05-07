function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Define the alert message
var message = "Invalid login credentials";

// Create a new alert box element
var alertBox = document.createElement("div");

// Add styles to the alert box
alertBox.style.position = "fixed";
alertBox.style.top = "50%";
alertBox.style.left = "50%";
alertBox.style.transform = "translate(-50%, -50%)";
alertBox.style.backgroundColor = "#f44336";
alertBox.style.color = "white";
alertBox.style.padding = "20px";
alertBox.style.borderRadius = "5px";

// Set the message content
alertBox.innerHTML = message;

// Add the alert box to the document
document.body.appendChild(alertBox);


	// You can add logic here to check the username and password against a database of users
	// For now, we will assume there are two users: "user1" and "user2"

	if (username === "Litesh" && password === "Grover") {
		window.location.href = "owner2.html";
	} else if (username === "Yuvraj" && password === "Sekhon") {
		window.location.href = "owner1.html";
    } else if (username === "Nikhil" && password === "Verma") {
		window.location.href = "owner3.html";
    } else if (username === "Harsh" && password === "Thind") {
		window.location.href = "owner4.html";
    } else if (username === "Pranshul" && password === "Gupta") {
		window.location.href = "owner5.html";
	} else {
		
	}
}

function showAlert(message) {
	var alertDiv = document.createElement("div");
	alertDiv.classList.add("alert");
	alertDiv.innerHTML = message + '<span class="alert-close" onclick="function() {alertDiv.remove();}">&#10006;</span>';

	document.body.appendChild(alertDiv);
}
