// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// lowercase array
var lowercaseArray = [
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
// uppercase array
var uppercaseArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// number array
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// special character array
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// generated password array
var generatedArray = [];

// function to generate the entire password
function generatePassword() {
  // welcoming user and prepping to choose criteria
  alert('Welcome to the random password generator!');
  alert('Choose criteria for your uniquely generated password');
  var passLength = prompt(
    'Choose a length of at least 8 characters and no more than 128 characters'
  );
  console.log(passLength);
  // validate if the password length input is within range. If not alert user and ask again
  if (passLength <= 7 || passLength >= 129) {
    passLength = prompt(
      'Error: number out of range; choose a length of at least 8 characters and no more than 128 characters'
    );
  }
  // validate if the password length input is not a number. Alert user and ask again
  if (isNaN(passLength)) {
    passLength = prompt(
      'Error: input not a number; choose a length of at least 8 characters and no more than 128 characters'
    );
  }
  // Asking user input on their choice of criteria for the generated password
  var isLowercase = confirm('Would you like Lowercase elements? ok or cancel');
  console.log(isLowercase);
  var isUppercase = confirm('Would you like Uppercase elements? ok or cancel');
  console.log(isUppercase);
  var isNum = confirm('Would you like Number elements? ok or cancel');
  console.log(isNum);
  var isSpecialchar = confirm(
    'Would you like Special Characters elements? ok or cancel'
  );
  console.log(isSpecialchar);
  // validate if no password criteria was chosen if so alert the user and ask again
  while (
    isLowercase === false &&
    isUppercase === false &&
    isNum === false &&
    isSpecialchar === false
  ) {
    alert('Error: must choose at least one option;');
    var isLowercase = confirm(
      'Would you like a Lowercase elements? ok or cancel'
    );
    console.log(isLowercase);
    isUppercase = confirm('Would you like a Uppercase elements? ok or cancel');
    console.log(isUppercase);
    isNum = confirm('Would you like a Number elements? ok or cancel');
    console.log(isNum);
    isSpecialchar = confirm(
      'Would you like Special Characters elements? ok or cancel'
    );
    console.log(isSpecialchar);
  }
  // validate if user adds lowercase to criteria
  if (isLowercase === true) {
    generatedArray = generatedArray.concat(lowercaseArray);
    console.log(generatedArray);
  }
  // validate if user adds uppercase to criteria
  if (isUppercase === true) {
    generatedArray = generatedArray.concat(uppercaseArray);
    console.log(generatedArray);
  }
  // validate if user adds number to criteria
  if (isNum === true) {
    generatedArray = generatedArray.concat(numArray);
    console.log(generatedArray);
  }
  // validate if user adds special character to criteria
  if (isSpecialchar === true) {
    generatedArray = generatedArray.concat(specChar);
    console.log(generatedArray);
  }
  // variable to become the generated password
  var generatedPassword = '';
  // iterating the number of times the password loop. Each time adding a newly generated password element
  for (var i = 0; i < passLength; i++) {
    generatedPassword =
      generatedPassword +
      generatedArray[Math.floor(Math.random() * generatedArray.length)];
    console.log(generatedPassword);
  }
  // returning the fully generated password with the users criteria
  console.log(generatedPassword);
  return generatedPassword;
}
