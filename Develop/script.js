// Assignment Code
var generateBtn = document.querySelector("#generate");
var buttonClick = ("How many characters would you like your password to be?");
var lc = "abcdefghijklmnopqrstuvwxyz"
var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChar = "!@#$%&*?"
var num = "0123456789"

function promptMe(){
  var pwdLength = prompt(buttonClick);
  console.log(pwdLength);

if (pwdLength < 8 || pwdLength > 128 || pwdLength === NaN) {
  alert("Please select a number between 8 and 128")
} else if (pwdLength >= 8 || pwdLength <= 128) {
  confirm("Would you like to include special characters?")
  confirm("Would you like to include numeric characters?")
} else {
  console.log("hi")
}
}

// test



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click" , prompt(buttonClick))