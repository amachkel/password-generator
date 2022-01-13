/*

GIVEN I need a new, secure password
[x] WHEN I click the button to generate a password
[x] THEN I am presented with a series of prompts for password criteria

[x] WHEN prompted for password criteria
[x] THEN I select which criteria to include in the password
[x] WHEN prompted for the length of the password
[x] THEN I choose a length of at least 8 characters and no more than 128 characters
[x] WHEN asked for character types to include in the password
[x] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
[x] WHEN I answer each prompt
[x] THEN my input should be validated and at least one character type should be selected
[x] WHEN all prompts are answered
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
  var passwordCase = stepTwo();
  var passwordNumeric = stepThree();
  var passwordSpecial = stepFour();
  var options = stepFive(passwordCase, passwordNumeric, passwordSpecial);
  console.log(options);
  // console.log(passwordLength);
  // console.log(passwordCase);
  // console.log(passwordNumeric);
  // console.log(passwordSpecial);
  //check that at least one option is selected
  if (!passwordCase && !passwordNumeric && !passwordSpecial) {
    alert("No, wait! You have to select 'OK' for at least one option.");
    generatePassword(); //starts prompts over from beginning.
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var currentOption = getRandomFromArray(options);
    switch (currentOption) {
      case "lowerCase":
        password += getRandomFromArray(lowerCase);
        break;
      case "upperCase":
        password += getRandomFromArray(upperCase);
        break;
      case "numbers":
        password += getRandomFromArray(numbers);
        break;
      case "special":
        password += getRandomFromArray(special);
      default:
        password += getRandomFromArray(lowerCase);
    }
  }
  return password;
}
//need arrays for each category.
var upperCase = [
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

var lowerCase = [
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [
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
console.log(special.length);
function stepOne() {
  var passwordLength = prompt(
    "How long do you want your password? Choose between 8-128 characters."
  );
  //convert string to number
  var stringToNum = parseInt(passwordLength);
  //if failed, alert invalid, prompt to re-input
  if (isNaN(stringToNum) || stringToNum < 8 || stringToNum > 128) {
    alert("Invalid. Pick a number of characters between 8-128.");
    stepOne(); //After alert, user will be prompted again.
  }
  //wanted to end program if user chose cancel. Doesn't work.
  // if(!passwordLength) {
  //   return;
  // }
  return stringToNum; //returns user's choice to passwordLength.
}

function stepTwo() {
  var passwordCase = confirm("Include uppercase?");
  if (passwordCase) {
    //if true,
    alert("Uppercase characters will be included.");
  } else {
    //if false,
    alert("Okay, only lowercase then!");
  }
  return passwordCase;
}

function stepThree() {
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

function stepFour() {
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

//Generate password using stored values.
function stepFive(passwordCase, passwordNumeric, passwordSpecial) {
  //Always have lowercase available
  console.log(passwordCase);
  console.log(passwordNumeric);
  console.log(passwordSpecial);
  var options = ["lowerCase"];
  //if user wants uppercase(is truthy), push to options array
  if (passwordCase) {
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
//random # of characters per category user chose
function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
//Math.floor(Math.random() * array.length), for
//Math.floor(Math.random() * array.length), for the values
//increment with for loop until === passwordLength.
//alert or display generated password.
