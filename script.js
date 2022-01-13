//Question 1: 169-172, I tried to cancel program if user chooses cancel. It only ever comes back with my "Invalid!" alert.

//Question 2: When user chooses options, the number of each option to be included is generated randomly... how do I remove the possibility
//of that random value returning as 0? As in, if the user chooses to include capital letters as well, how do I guarantee there will be at
//least one capital letter?

//need arrays for each category.
var arrUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var arrLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var arrNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var arrSpecial = [
  '"',
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

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
  var passwordLength = getPasswordLength();
  var lowerCase = addLowerCase();
  var upperCase = addUpperCase();
  var passwordNumeric = addNumbers();
  var passwordSpecial = addSpecialCharacters();
  
  //must call variables in getPasswordCharacters
  var options = getPasswordCharacters(upperCase, lowerCase, passwordNumeric, passwordSpecial);
  //check that at least one option is selected
  if (!upperCase && !lowerCase && !passwordNumeric && !passwordSpecial) {
    alert("No, wait! You have to select 'OK' for at least one option.");
    generatePassword(); //starts prompts over from beginning.
  }
  var password = "";
  //increment with for loop until it reaches desired password length.
  for (var i = 0; i < passwordLength; i++) {
    var currentOption = getRandomFromArray(options);
    switch (currentOption) {
      //if 'lowercase' is pushed to options array, add random number of string values from lowerCase array to password.
      case "lowerCase":
        password += getRandomFromArray(arrLowerCase);
        break;
      //if 'uppercase' is pushed to options, add random number of string values from upperCase array.
      case "upperCase":
        password += getRandomFromArray(arrUpperCase);
        break;
      //if 'numbers' is pushed to options, add random number of string values from numbers.
      case "numbers":
        password += getRandomFromArray(arrNumbers);
        break;
      //if 'special' is pushed to options, add random number of string values from special.
      case "special":
        password += getRandomFromArray(arrSpecial);
      // default:
      //if no values are pushed to options array, default is all lowercase.
      //This should never happen, because if nothing is selected, user is alerted with error and generatePassword() is called.
      // password += getRandomFromArray(lowerCase);
    }
  }
  return password;
}


function getPasswordLength() {
  var passwordLength = prompt(
    "How long do you want your password? Choose between 8-128 characters."
  );
  //convert string to number
  var stringToNum = parseInt(passwordLength);
  //if failed, alert invalid, prompt to re-input
  if (isNaN(stringToNum) || stringToNum < 8 || stringToNum > 128) {
    alert("Invalid. Pick a number of characters between 8-128.");
    getPasswordLength(); //After alert, user will be prompted again.
  }
  //wanted to end program if user chose cancel. Doesn't work.
  // if(!passwordLength) {
  //   return;
  // }
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

//with variables as getPasswordCharacters paramaters, we can get user's choice and push respective string values in options array.
//The resulting options are then used in a switch statement within generatePassword() to add the corresponding string values to password.
//getRandomFromArray() randomizes how many from each option selected.
function getPasswordCharacters(upperCase, lowerCase, passwordNumeric, passwordSpecial) {
  var options = [];
  //if user wants uppercase(is truthy), push to options array
  if (lowerCase) {
    options.push("lowerCase");
  }
  if (upperCase) {
    options.push("upperCase");
  }
  //if truthy, push to options
  if (passwordNumeric) {
    options.push("numbers");
  }
  //if truthy, push to options
  if (passwordSpecial) {
    options.push("special");
  }
  return options;
}
//random number of characters per category user chose
function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
