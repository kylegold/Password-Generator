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

// function to choose a random index from an array
// function arrPicker(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// aNum
// var aNum = arrPicker(numArray);
// // aLowercase
// var aLowercase = arrPicker(lowercaseArray);
// // aUppercase
// var aUppercase = arrPicker(uppercaseArray);
// // aSpecialchar
// var aSpecialchar = arrPicker(specChar);

// console.log(aNum, aLowercase, aUppercase, aSpecialchar);

// function with one password criteria
// if criteria is x
// iterate password length times
// check if password criteria is lowerCase or upperCase numArray or specChar
// then generate random element with the criteria
// and save the element to end of generated array
// return generated array

// function oneCriteria(criteria) {
//   if (criteria) {
//     for (var i = 0; i < criteria.length; i++) {
//       generatedArray.push(arrPicker(criteria));
//     }
//     return generatedArray.toString();
//   }
// }
// function with two password criterias
// function with three password criterias
// function with four password criterias

// function to generate the entire password
function generatePassword() {
  // welcoming user and prepping to choose criteria
  alert('Welcome to the random password generator!');
  alert('Choose criteria for your uniquely generated password');
  var passLength = prompt(
    'Choose a length of at least 8 characters and no more than 128 characters'
  );
  console.log(passLength);

  if (passLength <= 7 || passLength >= 129) {
    passLength = prompt(
      'Error: number out of range; choose a length of at least 8 characters and no more than 128 characters'
    );
  }
  if (typeof passLength != 'number') {
    passLength = prompt(
      'Error: input not a number; choose a length of at least 8 characters and no more than 128 characters'
    );
  }

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
  // validate if lowercase
  if (isLowercase === true) {
    generatedArray = generatedArray.concat(lowercaseArray);
    console.log(generatedArray);
  }
  if (isUppercase === true) {
    generatedArray = generatedArray.concat(uppercaseArray);
    console.log(generatedArray);
  }
  if (isNum === true) {
    generatedArray = generatedArray.concat(numArray);
    console.log(generatedArray);
  }
  if (isSpecialchar === true) {
    generatedArray = generatedArray.concat(specChar);
    console.log(generatedArray);
  }
  var generatedPassword = '';
  for (var i = 0; i < passLength; i++) {
    generatedPassword =
      generatedPassword +
      generatedArray[Math.floor(Math.random() * generatedArray.length)];
    console.log(generatedPassword);
  }
  console.log(generatedPassword);
  return generatedPassword;
  // console.log(arrPicker(charArray));
  // console.log(generatedArray.join(', '));
}
