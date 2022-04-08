// Create list of special characters to be used
const specialCharacters = "!@#$%^&*";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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

  // require at least one speical character type

  var minimumCount = 0;
  
    if (numbers == false & lowerCases == false & upperCases == false & special == false) {
      window.alert("Please include either a number, lowercase, uppercase, or special character in your password.");
           
    }

  //empty minimums for each character type 

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  // functions to generate the password

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  // verify which options from above were selected 
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 10);

    randomPasswordGenerated += randomNumberPicked;
    
  }

  // to make sure characters get added to the password

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;

}



