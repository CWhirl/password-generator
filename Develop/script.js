// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"
, "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [];
for (const i in lowercase) {
  uppercase.push(lowercase[i].toUpperCase());
}
var special = ['!','\"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/',
':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

var toPassword = [];

// creates the array used to generate the password
function definePassword() {
  if (window.confirm("Would you like to use special characters?")) {
    for (const i in special) {
      toPassword.push(special[i]);
    }
  }
  if (window.confirm("Would you like to use lowercase letters?")){
    for (const i in lowercase) {
      toPassword.push(lowercase[i]);
    }
  }
  if (window.confirm("Would you like to use uppercase letters?")) {
    for (const i in uppercase) {
      toPassword.push(uppercase[i]);
    }
  }
}

//uses the array from definePassword to generate a password
function generatePassword() {
  definePassword();
  var password = [];
  length = window.prompt("How many characters long should the password be?");
  for (var i = 0; i < length; i++) {
    password.push(toPassword[Math.floor(Math.random() * toPassword.length)]);
  }
  password = password.join("");

  toPassword = [];

  return password.replace(",","");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


