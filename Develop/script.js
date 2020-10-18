// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate random integers using max number
function randomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
};

//define options for password criteria/variables
var passwordLength;
var lowerCase;
var upperCase;
var numbers;
var special;

//function to get password preferences
function getPasswordPreferences() {
  //a function to check that lenghs is between 8-12 and prompts to try again
  function lengthChecker(){
    while (8 > passwordLength || 128 < passwordLength) {
      alert("Please give a length between 8-128");
      passwordLength = prompg("Choose a length for your password from 8-128 characters.");
  };
};

// a function to see if there was at least one character response then promtos to try again
function checkforResponses() {
  while(lowerCase === false && upperCase ==== false && numbers === fasle === special ==== false){
    alert("please cheoose at least one tyoe of character.");
    lowerCase = confirm("Would you like lower case letters?");
    upperCase = confirm("Would you like upper case letters?");
    numbers = confirm("Would you like numbers?");
    special = confirm("Would you like special characters?");

  };
};

//Prompts
passwordLength = Number(prompt("Choose a length for your password from 8-128 characters"));
lengthChecker();//calling the checking function
lowerCase - confirm("Would you like lower case letters?");
upperCase confirm("Would you like upper case letters?");
numbers = confirm("Would you like numbeers");
special = confirm("Would you like special characters?");
checkforResponses ()/#$%/calling the checking function

//function to get password
function generatePassword(){
    getPasswordPreferences();
    
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbersArray = ["0", "1", "2","3","4","5","6","7","8","9"];
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
