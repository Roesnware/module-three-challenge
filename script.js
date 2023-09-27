// global arrays
let specialCharArr = ['!','"', '#', '$', '%', '&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','{','|','}','~',',',"'"];
let numbersArr = ['0','1','2','3','4','5','6','7','8','9'];
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// main func
function generatePassword(){

  // declare empty arrays

  // prompt for length

  // prompt for special char

  // add special char array

  // prompt for numbers

  // add numbers

  // prompt for lower case

  // add lower case array

  // prompt for upper case

  // add upper case array

  // get random charcters in new array


  // print securePass array on page

}

// function to add elements to array


// function to get random number 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// call main func

