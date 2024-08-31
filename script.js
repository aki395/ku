// script.js

// Get the form elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Add event listener to the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input fields
  if (username === "" || password === "") {
    alert("Please fill in both username and password");
    return;
  }

  // Simulate a login request (replace with actual API call or login logic)
  console.log(
    `Logging in with username: ${username} and password: ${password}`
  );
  alert(`Welcome, ${username}!`);

  // Reset the form fields
  usernameInput.value = "";
  passwordInput.value = "";
});
function checkResults() {
  var resultText = document.getElementById("resultText");
  var score = 0;

  // Check Image 1
  var selectedValue1 = document.querySelector('input[name="image1"]:checked');
  if (selectedValue1 && selectedValue1.value === "1") {
    score++;
  }

  // Check Image 2
  var selectedValue2 = document.querySelector('input[name="image2"]:checked');
  if (selectedValue2 && selectedValue2.value === "1") {
    score++;
  }

  // Check Image 3
  var selectedValue3 = document.querySelector('input[name="image3"]:checked');
  if (selectedValue3 && selectedValue3.value === "2") {
    score++;
  }

  // Check Image 4
  var selectedValue4 = document.querySelector('input[name="image4"]:checked');
  if (selectedValue4 && selectedValue4.value === "2") {
    score++;
  }

  // Check Image 5
  var selectedValue5 = document.querySelector('input[name="image5"]:checked');
  if (selectedValue5 && selectedValue5.value === "3") {
    score++;
  }

  // Check Image 6
  var selectedValue6 = document.querySelector('input[name="image6"]:checked');
  if (selectedValue6 && selectedValue6.value === "1") {
    score++;
  }

  // Check Image 7
  var selectedValue7 = document.querySelector('input[name="image7"]:checked');
  if (selectedValue7 && selectedValue7.value === "1") {
    score++;
  }

  // Check Image 8
  var selectedValue8 = document.querySelector('input[name="image8"]:checked');
  if (selectedValue8 && selectedValue8.value === "2") {
    score++;
  }

  // Check Image 9
  var selectedValue9 = document.querySelector('input[name="image9"]:checked');
  if (selectedValue9 && selectedValue9.value === "3") {
    score++;
  }

  // Check Image 10
  var selectedValue10 = document.querySelector('input[name="image10"]:checked');
  if (selectedValue10 && selectedValue10.value === "1") {
    score++;
  }
  // Display Results
  resultText.textContent = "You got " + score + " out of 10 correct!";
  document.getElementById("results").style.display = "block";
}
// script.js

// Get the form elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Add event listener to the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input fields
  if (username === "" || password === "") {
    alert("Please fill in both username and password");
    return;
  }

  // Simulate a login request (replace with actual API call or login logic)
  console.log(
    `Logging in with username: ${username} and password: ${password}`
  );
  alert(`Welcome, ${username}!`);

  // Reset the form fields
  usernameInput.value = "";
  passwordInput.value = "";
});
function checkResults() {
  var resultText = document.getElementById("resultText");
  var score = 0;

  // Check Image 1
  var selectedValue1 = document.querySelector('input[name="image1"]:checked');
  if (selectedValue1 && selectedValue1.value === "1") {
    score++;
  }

  // Check Image 2
  var selectedValue2 = document.querySelector('input[name="image2"]:checked');
  if (selectedValue2 && selectedValue2.value === "1") {
    score++;
  }

  // Check Image 3
  var selectedValue3 = document.querySelector('input[name="image3"]:checked');
  if (selectedValue3 && selectedValue3.value === "2") {
    score++;
  }

  // Check Image 4
  var selectedValue4 = document.querySelector('input[name="image4"]:checked');
  if (selectedValue4 && selectedValue4.value === "2") {
    score++;
  }

  // Check Image 5
  var selectedValue5 = document.querySelector('input[name="image5"]:checked');
  if (selectedValue5 && selectedValue5.value === "3") {
    score++;
  }

  // Check Image 6
  var selectedValue6 = document.querySelector('input[name="image6"]:checked');
  if (selectedValue6 && selectedValue6.value === "1") {
    score++;
  }

  // Check Image 7
  var selectedValue7 = document.querySelector('input[name="image7"]:checked');
  if (selectedValue7 && selectedValue7.value === "1") {
    score++;
  }

  // Check Image 8
  var selectedValue8 = document.querySelector('input[name="image8"]:checked');
  if (selectedValue8 && selectedValue8.value === "2") {
    score++;
  }

  // Check Image 9
  var selectedValue9 = document.querySelector('input[name="image9"]:checked');
  if (selectedValue9 && selectedValue9.value === "3") {
    score++;
  }

  // Check Image 10
  var selectedValue10 = document.querySelector('input[name="image10"]:checked');
  if (selectedValue10 && selectedValue10.value === "1") {
    score++;
  }
  // Display Results
  resultText.textContent = "You got " + score + " out of 10 correct!";
  document.getElementById("results").style.display = "block";
}
// script.js

// Get the form elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Add event listener to the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input fields
  if (username === "" || password === "") {
    alert("Please fill in both username and password");
    return;
  }

  // Simulate a login request (replace with actual API call or login logic)
  console.log(
    `Logging in with username: ${username} and password: ${password}`
  );
  alert(`Welcome, ${username}!`);

  // Reset the form fields
  usernameInput.value = "";
  passwordInput.value = "";
});
function checkResults() {
  var resultText = document.getElementById("resultText");
  var score = 0;

  // Check Image 1
  var selectedValue1 = document.querySelector('input[name="image1"]:checked');
  if (selectedValue1 && selectedValue1.value === "1") {
    score++;
  }

  // Check Image 2
  var selectedValue2 = document.querySelector('input[name="image2"]:checked');
  if (selectedValue2 && selectedValue2.value === "1") {
    score++;
  }

  // Check Image 3
  var selectedValue3 = document.querySelector('input[name="image3"]:checked');
  if (selectedValue3 && selectedValue3.value === "2") {
    score++;
  }

  // Check Image 4
  var selectedValue4 = document.querySelector('input[name="image4"]:checked');
  if (selectedValue4 && selectedValue4.value === "2") {
    score++;
  }

  // Check Image 5
  var selectedValue5 = document.querySelector('input[name="image5"]:checked');
  if (selectedValue5 && selectedValue5.value === "3") {
    score++;
  }

  // Check Image 6
  var selectedValue6 = document.querySelector('input[name="image6"]:checked');
  if (selectedValue6 && selectedValue6.value === "1") {
    score++;
  }

  // Check Image 7
  var selectedValue7 = document.querySelector('input[name="image7"]:checked');
  if (selectedValue7 && selectedValue7.value === "1") {
    score++;
  }

  // Check Image 8
  var selectedValue8 = document.querySelector('input[name="image8"]:checked');
  if (selectedValue8 && selectedValue8.value === "2") {
    score++;
  }

  // Check Image 9
  var selectedValue9 = document.querySelector('input[name="image9"]:checked');
  if (selectedValue9 && selectedValue9.value === "3") {
    score++;
  }

  // Check Image 10
  var selectedValue10 = document.querySelector('input[name="image10"]:checked');
  if (selectedValue10 && selectedValue10.value === "1") {
    score++;
  }
  // Display Results
  resultText.textContent = "You got " + score + " out of 10 correct!";
  document.getElementById("results").style.display = "block";
}
// script.js

// Get the form elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Add event listener to the form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the username and password values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input fields
  if (username === "" || password === "") {
    alert("Please fill in both username and password");
    return;
  }

  // Simulate a login request (replace with actual API call or login logic)
  console.log(
    `Logging in with username: ${username} and password: ${password}`
  );
  alert(`Welcome, ${username}!`);

  // Reset the form fields
  usernameInput.value = "";
  passwordInput.value = "";
});
function checkResults() {
  var resultText = document.getElementById("resultText");
  var score = 0;

  // Check Image 1
  var selectedValue1 = document.querySelector('input[name="image1"]:checked');
  if (selectedValue1 && selectedValue1.value === "1") {
    score++;
  }

  // Check Image 2
  var selectedValue2 = document.querySelector('input[name="image2"]:checked');
  if (selectedValue2 && selectedValue2.value === "1") {
    score++;
  }

  // Check Image 3
  var selectedValue3 = document.querySelector('input[name="image3"]:checked');
  if (selectedValue3 && selectedValue3.value === "2") {
    score++;
  }

  // Check Image 4
  var selectedValue4 = document.querySelector('input[name="image4"]:checked');
  if (selectedValue4 && selectedValue4.value === "2") {
    score++;
  }

  // Check Image 5
  var selectedValue5 = document.querySelector('input[name="image5"]:checked');
  if (selectedValue5 && selectedValue5.value === "3") {
    score++;
  }

  // Check Image 6
  var selectedValue6 = document.querySelector('input[name="image6"]:checked');
  if (selectedValue6 && selectedValue6.value === "1") {
    score++;
  }

  // Check Image 7
  var selectedValue7 = document.querySelector('input[name="image7"]:checked');
  if (selectedValue7 && selectedValue7.value === "1") {
    score++;
  }

  // Check Image 8
  var selectedValue8 = document.querySelector('input[name="image8"]:checked');
  if (selectedValue8 && selectedValue8.value === "2") {
    score++;
  }

  // Check Image 9
  var selectedValue9 = document.querySelector('input[name="image9"]:checked');
  if (selectedValue9 && selectedValue9.value === "3") {
    score++;
  }

  // Check Image 10
  var selectedValue10 = document.querySelector('input[name="image10"]:checked');
  if (selectedValue10 && selectedValue10.value === "1") {
    score++;
  }
  // Display Results
  resultText.textContent = "You got " + score + " out of 10 correct!";
  document.getElementById("results").style.display = "block";
}


