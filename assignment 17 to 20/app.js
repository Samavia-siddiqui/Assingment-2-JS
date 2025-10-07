
// Assingment 17-20
// QUESTION NO 1
// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
let multiArray = [[], [], []];

// QUESTION NO 2
// Declare and initialize a multidimensional array representing the following matrix:
let matrix = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];

//QUESTION NO 3
// Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//QUESTION NO 4
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// Taking input from user
let number = parseInt(prompt("Enter a number to print its multiplication table: "));
let length = parseInt(prompt("Enter the length of the table: "));
// Printing multiplication table using for loop
for (let i = 1; i <= length; i++) {
  document.write(number + " x " + i + " = " + (number * i));
}

// QUESTION NO 5
// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// QUESTION NO 6
// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// a. Counting
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
  document.write(i + (i < 15 ? ", " : ""));
}
document.write("<br><br>");
// b. Reverse Counting
document.write("<b>Reverse Counting:</b><br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + (i > 1 ? ", " : ""));
}
document.write("<br><br>");
// c. Even
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + (i < 20 ? ", " : ""));
}
document.write("<br><br>");
// d. Odd
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
  document.write(i + (i < 19 ? ", " : ""));
}
document.write("<br><br>");
// e. Series
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k" + (i < 20 ? ", " : ""));
}

//QUESTION NO 7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// Take input from user
let userInput = prompt("Welcome to ABC Bakery! What do you want to order?");
// Convert input to lowercase (to avoid case mismatch)
userInput = userInput.toLowerCase();
// Search in array
if (A.includes(userInput)) {
  alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
} else {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// QUESTION NO 8
// Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
let a = [24, 53, 78, 91, 12];
let largest = a[0];  // assume first element is largest
for (let i = 1; i < a.length; i++) {
  if (a[i] > largest) {
    largest = a[i];
  }
}
console.log("The largest number is: " + largest);

// QUESTION NO 9
// Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
let B = [24, 53, 78, 91, 12];
let smallest = B[0];  // assume first element is smallest
for (let i = 1; i < B.length; i++) {
  if (B[i] < smallest) {
    smallest = B[i];
  }
}
console.log("The smallest number is: " + smallest);

//QUESTION NO 10
// Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}