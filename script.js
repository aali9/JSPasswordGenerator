// Assignment Code//
var generateBtn = document.querySelector("#generate");
const numbers = [1,2,3,4,5,6,7,8,9,0];
const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]


function generatePassword() {
  let choices = []

  var passwordLenght= prompt ("Please choose a lenght between 8 and 128 characters")
  if (passwordLenght<8 || passwordLenght >128){
    alert ("Incorrect password lenght")
    generatePassword ()
  } else if (passwordLenght === '' || isNaN(passwordLenght)) {
    alert ("Please enter valid password between 8 and 128")
    generatePassword ()
  } 
  