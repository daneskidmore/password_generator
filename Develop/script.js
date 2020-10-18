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
    while (8 > passwordLength || 128< passwordLength) {
      alert("Please give a length between 8-128")
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
