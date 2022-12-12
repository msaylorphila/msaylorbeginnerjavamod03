// Listed here we have variables starting with calling our button from our html file, then creating a string for our prompt for our button
// Following that are variables with strings to store each character set
// Following that are two variables storing arrays for our character pool and our final password
var generateBtn = document.getElementById("generate");
var buttonClick = ("How many characters would you like your password to be?");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbol = "!@#$%&*?"
var number = "0123456789"
var characterPool = []
var finalPassword = []
// This function created a variable that calls our generatePassword function and places it into our cardbody via calling our password id from the html file
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This is an event listener that calls our writePassword function when we click on our button
generateBtn.addEventListener("click" ,writePassword)

// This function creates a variable that stores the users response to our buttonClick prompt.
function generatePassword(){
  var pwdLength = prompt(buttonClick);
  console.log(pwdLength);
// It moves into an if statement that confirms we are within the right number of characters that then follows up with confirmations of what specific character types we would like
if (pwdLength < 8 || pwdLength > 128 || pwdLength === NaN) {
  prompt("Please select a number between 8 and 128")
} else if (pwdLength >= 8 || pwdLength <= 128) {
  var specChar = confirm("Would you like to include special characters?");
  var num = confirm("Would you like to include numeric characters?");
  var lc = confirm("Would you like to include lowercase letters?");
  var uc = confirm("Would you like to include uppercase letters?");
} 
// Here we've created a variable to store our user specific answers in booleans
var userAnswers = {
  passwordLength:pwdLength,
  specialCharacters:specChar,
  numbers:num,
  lowerCase:lc,
  upperCase:uc,
}
// I took if statements to confirm whether our booleans were true to then concat and pull from each of my variable strings combining them into my characterPool array
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

// Here I created a for loop to pull a random index from my characterPool array combined with the number given by the user for the passwordLength
// This was then pushed into my finalPassword array and joined to return our final password
for (var i = 0; i<userAnswers.passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*characterPool.length);
  var indexValue = characterPool[randomIndex];
  finalPassword.push(indexValue)
  console.log(finalPassword)
}

return finalPassword.join("")


}
