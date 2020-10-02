// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// character array
var charArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// number array
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// special character array
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// generated password array
var genArray = [];

// function to choose a random index from an array
function arrPicker(array) {
  return Math.floor(Math.random() * array.length);
}

// function to generate the entire password
function generatePassword() {
  console.log(arrPicker(charArray));
}

function writePassword() {
  // welcoming user and prepping to choose criteria
  alert('Welcome to the random password generator!');
  alert('Choose criteria for your uniquely generated password');
  var passLength = prompt(
    'Choose a length of at least 8 characters and no more than 128 characters'
  );
  if (typeof passLength !== 'number') {
    passLength = prompt(
      'Error: not a number; choose a length of at least 8 characters and no more than 128 characters'
    );
  }
  while (passLength < 8 || passLength > 128) {
    passLength = prompt(
      'Error: number out of range; choose a length of at least 8 characters and no more than 128 characters'
    );
  }
  var isLowercase = confirm(
    'Would you like a Lowercase elements? ok or cancel'
  );
  var isUppercase = confirm(
    'Would you like a Uppercase elements? ok or cancel'
  );
  var isNum = confirm('Would you like a Number elements? ok or cancel');
  var isSpecialchar = confirm(
    'Would you like Special Characters elements? ok or cancel'
  );

  if (
    isLowercase === false &&
    isUppercase === false &&
    isNum === false &&
    isSpecialchar === false
  ) {
    alert('Error: must choose at least one option;');
    isLowercase = confirm('Would you like a Lowercase elements? ok or cancel');
    isUppercase = confirm('Would you like a Uppercase elements? ok or cancel');
    isNum = confirm('Would you like a Number elements? ok or cancel');
    isSpecialchar = confirm(
      'Would you like Special Characters elements? ok or cancel'
    );
  }

  // function with one password criteria
  // if criteria is x
  // iterate passLength times
  // then generate random element with the criteria
  // and save the element to end of generated array
  // return generated array

  // function with two password criterias
  // function with three password criterias
  // function with four password criterias

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
