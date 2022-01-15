// Instead of randomizing the user's character type choices and then randomizing and choosing the characters from their
// respective arrays, this solve just adds all of the possible characters from the user's type choices to an array and 
// then randomly chooses from there. There's a disproportionate chance of getting certain character types, and the 
// probability of not getting a single character from one or more character types is higher this way. This is why I 
// chose to stick with the other solve, because it evens the playing field by first randomly choosing a character type, 
// and then choosing from its array. It's still possible not to get a character type, but it's a lot less likely.

//need arrays for each category.
var arrUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrLowerCase = "abcdefghijklmnopqrstuvwxyz";
var arrNumbers = "1234567890";
var arrSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var options = "".split("");
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password == undefined) {
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = getPasswordLength();
  if (!passwordLength) {
    return;
  }
  var lowerCase = addLowerCase();
  var upperCase = addUpperCase();
  var passwordNumeric = addNumbers();
  var passwordSpecial = addSpecialCharacters();
  // must call variables in getPasswordCharacters
  var options = getPasswordCharacters(
    upperCase,
    lowerCase,
    passwordNumeric,
    passwordSpecial
  );

  //check that at least one option is selected
  if (!upperCase && !lowerCase && !passwordNumeric && !passwordSpecial) {
    alert("No, wait! You have to select 'OK' for at least one option.");
    generatePassword(); //starts prompts over from beginning.
  }
  var password = "";
  //increment with for loop until it reaches desired password length.
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomFromArray(options);
  }
  return password;
}

function getPasswordLength() {
  var passwordLength = prompt(
    "How long do you want your password? Choose between 8-128 characters."
  );
  if (!passwordLength) {
    return false;
  }
  //convert string to number
  var stringToNum = parseInt(passwordLength);
  //if failed, alert invalid, prompt to re-input
  if (isNaN(stringToNum) || stringToNum < 8 || stringToNum > 128) {
    alert("Invalid. Pick a number of characters between 8-128.");
    getPasswordLength(); //After alert, user will be prompted again.
  }

  return stringToNum; //returns user's choice to passwordLength.
}

function addUpperCase() {
  var upperCase = confirm("Include uppercase?");
  if (upperCase) {
    //if true,
    alert("Uppercase characters will be included.");
  } else {
    //if false,
    alert("Okay, we'll keep them out!");
  }
  return upperCase;
}

function addLowerCase() {
  var lowerCase = confirm("Include lowercase?");
  if (lowerCase) {
    //if true,
    alert("Okay, let's toss some in!");
  } else {
    //if false,
    alert("That's a no. Sure thing.");
  }
  return lowerCase;
}

function addNumbers() {
  var passwordNumeric = confirm("Include numbers?");
  if (passwordNumeric) {
    //if true,
    alert("Numbers it is!");
  } else {
    //if false,
    alert("No numbers, got it.");
  }
  return passwordNumeric;
}

function addSpecialCharacters() {
  var passwordSpecial = confirm("Include special characters?");
  if (passwordSpecial) {
    //if true,
    alert("Alright, we can add those.");
  } else {
    //if false,
    alert("No problem! We'll just leave those out.");
  }
  return passwordSpecial;
}

function getPasswordCharacters(
  upperCase,
  lowerCase,
  passwordNumeric,
  passwordSpecial
) {
  //if user wants uppercase(is truthy), push to options array
  if (lowerCase) {
    options += arrLowerCase;
  }
  if (upperCase) {
    options += arrUpperCase;
  }
  //if truthy, push to options
  if (passwordNumeric) {
    options += arrNumbers;
  }
  //if truthy, push to options
  if (passwordSpecial) {
    options += arrSpecial;
  }

  return options;
  
}
//random number of characters per category user chose
function getRandomFromArray(options) {
  return options[Math.floor(Math.random() * options.length)];
}
