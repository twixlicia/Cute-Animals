// info button
document.getElementById("infobutton").addEventListener("click", function() {
    location.href = "https://paradepets.com/pet-news/cute-animals";
});

// form
const form = document.getElementById("form");

// submit button
form.addEventListener("submit", function(event) {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const gender = document.querySelector('input[name="gender"]:checked');
const interests = document.querySelectorAll('input[name="interests"]:checked');
const message = document.getElementById("message").value.trim();

let isValid = true;

// name 
if (name === "") {
  document.getElementById("nameError").textContent = "Name is required.";
  isValid = false;
} else {
  document.getElementById("nameError").textContent = "";
}

// email 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
if (email === "") {
  document.getElementById("emailError").textContent = "Email is required";
  isValid = false;
} else if (!emailPattern.test(email)) {
  document.getElementById("emailError").textContent = "Invalid email format";
  isValid = false;
} else {
  document.getElementById("emailError").textContent = "";
}

// gender 
if (!gender) {
  document.getElementById("genderError").textContent = "Gender is required";
  isValid = false;
} else {
  document.getElementById("genderError").textContent = "";
}

// interests 
if (interests.length === 0) {
  document.getElementById("interestsError").textContent = "Select at least one interest";
  isValid = false;
} else {
  document.getElementById("interestsError").textContent = "";
}

// message
if (message === "") {
  document.getElementById("messageError").textContent = "Message is required";
  isValid = false;
} else {
  document.getElementById("messageError").textContent = "";
}

// if not valid
if (!isValid) {
  event.preventDefault();
}
});

// notification 
Notification.requestPermission().then((result) => {
    if(result === "granted"){
        new Notification("Welcome to the info page!");
    }
});