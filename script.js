/*

GIVEN I need a new, secure password
[ ] WHEN I click the button to generate a password
[x] THEN I am presented with a series of prompts for password criteria

[ ] WHEN prompted for password criteria
[ ] THEN I select which criteria to include in the password
[ ] WHEN prompted for the length of the password
[ ] THEN I choose a length of at least 8 characters and no more than 128 characters
[ ] WHEN asked for character types to include in the password
[ ] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
[ ] WHEN I answer each prompt
[ ] THEN my input should be validated and at least one character type should be selected
[ ] WHEN all prompts are answered
[ ] THEN a password is generated that matches the selected criteria
[ ] WHEN the password is generated
[ ] THEN the password is either displayed in an alert or written to the page

*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = stepOne();

}

function stepOne() {
  var passwordLength = prompt('How long do you want your password? Choose between 8-128 characters.');
  var stringToNum = parseInt(passwordLength);
  console.log(stringToNum);
  if ((isNaN(stringToNum)) || (stringToNum <8 || stringToNum >128)) {
   console.log("hi there");
    alert("Invalid. Pick a number of characters between 8-128.");
    stepOne();
  }
}
  var passwordCase = prompt("Include uppercase?");
  var passwordNumeric = prompt("Include numbers?");
  var passwordSpecial = prompt("Include special characters?");

  //"128"
  //convert string to number

  //if failed, alert invalid, prompt to re-input

    //run passwordLength prompt again. Need it wrapped in function


  //if true, next prompt: passwordCase

  //next prompt: numbers
  //next prompt: special characters
  //check that at least one option is selected (store answers in variable),
  //if false, prompt("invalid. choose something"). Then loop to passwordCase prompt.
  //else, generate password using stored values.
  //alert or display generated password.
