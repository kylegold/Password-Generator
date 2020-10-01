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
  var lCase = confirm('Would you like a Lowercase elements? ok or cancel');
  var uCase = confirm('Would you like a Uppercase elements? ok or cancel');
  var num = confirm('Would you like a Number elements? ok or cancel');
  var sChar = confirm(
    'Would you like Special Characters elements? ok or cancel'
  );

  if (lCase === false && uCase === false && num === false && sChar === false) {
    alert('Error: must choose at least one option;');
    lCase = confirm('Would you like a Lowercase elements? ok or cancel');
    uCase = confirm('Would you like a Uppercase elements? ok or cancel');
    num = confirm('Would you like a Number elements? ok or cancel');
    sChar = confirm('Would you like Special Characters elements? ok or cancel');
  }

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
