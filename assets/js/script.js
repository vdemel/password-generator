// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//series of prompts for password criteria

function generatePassword() {

  //prompt for length of password
  var passwordLength = window.prompt("Please enter the number of characters you want for your password.  It must be more than 8 but less than 20.");

  //write code for if the user puts something not allowed

  //write code to confirm the number the user selected
    window.alert("You have selected " + passwordLength + " characters.");



}

// selct which criteria to include

//prompt for character types to include in password (whether or not to include lowercase, uppercase, numeric, and/or special characters)

//input should be validated and at least one character type selected

//when all prompts are answered a password is generated

//the password is either displayed in an alert of written to the page

