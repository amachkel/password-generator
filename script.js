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
  //must call variables in stepFive
  var options = stepFive(passwordCase, passwordNumeric, passwordSpecial);
  // console.log(options);
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
  //increment with for loop until it reaches desired password length.
  for (var i = 0; i < passwordLength; i++) {
    var currentOption = getRandomFromArray(options);
    switch (currentOption) {
      //if 'lowercase' is pushed to options array, add random number of string values from lowerCase array to password.
      case "lowerCase":
        password += getRandomFromArray(lowerCase);
        break;
      //if 'uppercase' is pushed to options, add random number of string values from upperCase array.
      case "upperCase":
        password += getRandomFromArray(upperCase);
        break;
      //if 'numbers' is pushed to options, add random number of string values from numbers.
      case "numbers":
        password += getRandomFromArray(numbers);
        break;
      //if 'special' is pushed to options, add random number of string values from special.
      case "special":
        password += getRandomFromArray(special);
      default:
        //if no values are pushed to options array, default is all lowercase.
        //This should never happen, because if nothing is selected, user is alerted with error and generatePassword() is called.
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

//with variables as stepFive paramaters, we can get user's choice and push respective string values in options array.
//The resulting options are then used in a switch statement within generatePassword() to add the corresponding string values to password.
//getRandomFromArray() randomizes how many from each option selected.
function stepFive(passwordCase, passwordNumeric, passwordSpecial) {
  //logs as true or false, depending on user's choice
  console.log(passwordCase);
  console.log(passwordNumeric);
  console.log(passwordSpecial);
  //Always have lowercase available
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
//random number of characters per category user chose
function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
