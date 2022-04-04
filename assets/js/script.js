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

  //code for if the user puts something not allowed
    if (passwordLength < 8 || passwordLength > 20) {
      window.alert("Please provide a number between 9 and 19.");
      return generatePassword();
    }
  //code to confirm the number the user selected
      window.alert("You have selected " + passwordLength + " characters.");

  //code to include different character types    

  var numbers = window.confirm("Do you want numbers in your password?");

  var lowerCases = window.confirm("Do you want lowercases in your password?");

  var upperCases = window.confirm("Do you want uppercases in your password?");

  var special = window.confirm("Do you want special characters in your password?");

  //to make sure that at least one special character was selected

    if (numbers == false & lowerCases == false & upperCases == false & special == false) {
      window.alert("Please include either a number, lowercase, uppercase, or special character in your password.");
      return generatePassword();
    }



}



//when all prompts are answered a password is generated

//the password is either displayed in an alert of written to the page

