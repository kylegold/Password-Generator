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

// function to choose a random index from an array
function arrPicker(array) {
  return Math.floor(Math.random() * array.length);
}

// function to generate the entire password
function generatePassword() {
  console.log(arrPicker(charArray));
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
