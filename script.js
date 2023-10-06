
// TO DO: WHEN I click the button to generate a password
// I am presented with a series of prompts for password criteria
// THEN I select which criteria to include in the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// THEN the password is either displayed in an alert or written to the page


//setting the variables
var passwordlength = 8;
var password = []

var specialcharacter = [" !#$%&'()*+,-./:;<=>?@[\]^_'{|}~"]
var uppercase = ["A","B","C","D","E","F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"]


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  let passwordlength = parseInt(prompt("How many characters would you like your password to contain?"));
  
  console.log(passwordlength);
  if(password>= 8) {
    alert("Click OK to confirm using special characters");
    alert("Click Ok to confirm including numeric characters")
    alert("Click Ok to confirm including uppercase characters");
    alert("Click Ok to confirm including uppercase characters");
  }
}




