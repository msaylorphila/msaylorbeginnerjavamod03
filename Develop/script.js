// Assignment Code
var generateBtn = document.getElementById("generate");
var buttonClick = ("How many characters would you like your password to be?");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbol = "!@#$%&*?"
var number = "0123456789"
var characterPool = []
var finalPassword = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click" ,writePassword)

function generatePassword(){
  var pwdLength = prompt(buttonClick);
  console.log(pwdLength);

if (pwdLength < 8 || pwdLength > 128 || pwdLength === NaN) {
  prompt("Please select a number between 8 and 128")
} else if (pwdLength >= 8 || pwdLength <= 128) {
  var specChar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numeric characters?");
  var lc = confirm("Would you like to include lowercase letters?");
  var uc = confirm("Would you like to include uppercase letters?");
} 

var userAnswers = {
  passwordLength:pwdLength,
  specialCharacters:specChar,
  numbers:num,
  lowerCase:lc,
  upperCase:uc,
}

if (userAnswers.specialCharacters === true) {
  characterPool = characterPool.concat(symbol.split(""))
}  
if (userAnswers.numbers === true) {
  characterPool = characterPool.concat(number.split(""))
} 
if (userAnswers.lowerCase === true) {
  characterPool = characterPool.concat(lowerCase.split(""))
}  
if (userAnswers.upperCase === true) {
  characterPool = characterPool.concat(upperCase.split(""))
} 
for (var i = 0; i<userAnswers.passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*characterPool.length);
  var indexValue = characterPool[randomIndex];
  finalPassword.push(indexValue)
  console.log(finalPassword)
}

return finalPassword.join("")


}
