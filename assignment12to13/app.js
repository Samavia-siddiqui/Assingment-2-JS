
// QUESTION NO 1
// // Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// let input = prompt("Enter a character:");
// if (input >= "0" && input <= "9") {
//     console.log("The input is a Number.");
// } else if (input >= "A" && input <= "Z") {
//     console.log("The input is an Uppercase Letter.");
// } else if (input >= "a" && input <= "z") {
//     console.log("The input is a Lowercase Letter.");
// } else {
//     console.log("Invalid input (not a number or alphabet).");
// }

// // QUESTION NO 2
// // Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// let num1 = prompt("Enter the first integer:");
// let num2 = prompt("Enter the second integer:");

// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//     alert("The larger number is: " + num2);
// } else {
//     alert("Both numbers are equal: " + num1);
// }

// // QUESTION NO 3
// // Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// let num = prompt("Enter a number:");

// if (num > 0) {
//     alert("The number is Positive.");
// } else if (num < 0) {
//     alert("The number is Negative.");
// } else {
//     alert("The number is Zero.");
// }

// // QUESTION NO 4
// // Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// let char = prompt("Enter a single character:");

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//     char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//     alert(true);   // TRUE(Vowel hai)
// } else {
//     alert(false);  // False (Vowel nhi h)
// }

// // QUESTION NO 5
// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// //    i. Check if user has entered password. If not, then give message “ Please enter your password”
// //    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
// // (a) Store correct password in a variable
// let correctPassword = "12345";  
// // (b) Ask user to enter password
// let userPassword = prompt("Enter your password:");
// // (c) Validate
// if (!userPassword) {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// // QUESTION NO 6
// // This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }
// var hour = 13;
// var greeting = (hour < 18) ? "Good day" : "Good evening";
// console.log(greeting);

// // QUESTION NO 7
// // Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// let time = prompt("Enter time in 24-hour clock format (e.g. 1900):");
// if (time >= 0 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night");
// } else {
//     alert("Invalid time format");
// }
