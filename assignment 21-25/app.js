// ----------- Chapter 21-25 String Methods ----------

// Task 1
// let firstName = prompt('Write your first name');
// let lastName = prompt('Write your last name');
// alert(`Hello ${firstName} ${lastName}`);

// // Task 2
// let userMobile = prompt('Write your favourite mobile phone model');
// let length = userMobile.length;
// document.write(`My favourite phone is: ${userMobile}<br>Length of string: ${length}`);

// // Task 3
// let word = 'Pakistani';
// let indexNo = word.indexOf("n");
// document.write(`String: ${word}<br>Index of 'n': ${indexNo}`);

// // Task 4
// word = 'Hello World';
// let lastIndex = word.lastIndexOf('l');
// document.write(`String: ${word}<br>Last index of 'l': ${lastIndex}`);

// // Task 5
// word = 'Pakistani';
// let indexChar = word.charAt(3);
// document.write(`String: ${word}<br>Character at index 3: ${indexChar}`);

// // Task 6
// firstName = prompt("Enter your first name: ");
// lastName = prompt("Enter your last name: ");
// let fullName = firstName.concat(" ", lastName);
// alert(`Hello ${fullName}`);

// // Task 7
// let city = 'Hyderabad';
// let replacedCity = city.replace('Hyder', 'Islam');
// document.write(`City: ${city}<br>After replacement: ${replacedCity}`);

// // Task 8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replacedMessage = message.replace(/and/g, '&');
// document.write(`Message: ${message}<br>After replacement: ${replacedMessage}`);

// // Task 9
// let str = "472";
// let num = Number(str);
// document.write(`value: ${str}<br>Type: ${typeof str}<br>`);
// document.write(`value: ${num}<br>Type: ${typeof num}<br>`);

// // Task 10
// let userInput = prompt('Please enter any word');
// let capital = userInput.toUpperCase();
// document.write(`User input: ${userInput}<br>Upper Case: ${capital}`);

// // Task 11
// userInput = prompt('Please enter any word');
// let firstChar = userInput.slice(0, 1).toUpperCase();
// let otherChars = userInput.slice(1).toLowerCase();
// let titleCase = firstChar + otherChars;
// document.write(`User Input: ${userInput}<br>Title case: ${titleCase}`);

// // Task 12
// let num2 = 35.36;
// str = num2.toString();
// let dotIndex = str.indexOf('.');
// let result = str.slice(0, dotIndex) + str.slice(dotIndex + 1);
// document.write(`Number: ${str}<br>Result: ${result}`);

// // Task 13
// userInput = prompt('Enter your name: ');
// let charCode;
// for (let i = 0; i < userInput.length; i++) {
//     charCode = userInput.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         alert("Please enter a valid username");
//     }
// }

// // Task 14
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("What do you want to order: ").toLowerCase();
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(`${arr[i]} is available at index ${i} in our bakery`);
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.write(`We are sorry. ${userInput} is not available in our bakery`);
// }

// // Task 15
// let password = prompt("Enter your password: ");
// let passwordLength = false;
// let passwordChar = false;
// let passwordInt = false;
// let passwordStart = true;

// // Check for alphabet
// for (let i = 0; i < password.length; i++) {
//     let charValue = password[i].charCodeAt(0);
//     if ((charValue >= 65 && charValue <= 90) || (charValue >= 97 && charValue <= 122)) {
//         passwordChar = true;
//     }
// }

// // Check for number
// for (let i = 0; i < password.length; i++) {
//     let charValue = password[i].charCodeAt(0);
//     if (charValue >= 48 && charValue <= 57) {
//         passwordInt = true;
//     }
// }

// // Check if starts with number
// let charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57) {
//     passwordStart = false;
// }

// // Check for length
// if (password.length >= 6) {
//     passwordLength = true;
// }

// if (!passwordChar || !passwordInt || !passwordLength || !passwordStart) {
//     alert("Enter valid Password");
// } else {
//     alert("Password Approved");
// }

// // Task 16
// str = 'University of Karachi';
// arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]}<br>`);
// }

// // Task 17
// userInput = prompt('Write any word');
// document.write(`User input: ${userInput}<br>Last character of input: ${userInput[userInput.length - 1]}`);

// // Task 18
// str = 'The quick brown fox jumps over the lazy dog';
// str = str.toLowerCase();
// let count = str.match(/the/g);
// let lengthCount = count ? count.length : 0;
// document.write(`Text: ${str}<br>There are ${lengthCount} occurrence(s) of word "the"`);/*
