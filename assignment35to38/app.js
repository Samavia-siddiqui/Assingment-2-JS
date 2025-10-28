// ----------- Chapter 35-38 Functions ----------

// Task 1
// Write a function that displays current date & time in your browser.

// function tellTime() {
//     let today = new Date();
//     document.write(`${today}`);
// }
// tellTime();


// // Task 2
// // Write a function that greets the user.

// function greetUser() {
//     let firstName = prompt('Write your first name');
//     let secondName = prompt('Write your second name');
//     alert(`Hello ${firstName} ${secondName}`);
// }
// greetUser();


// // Task 3
// // Write a function that adds two numbers and returns the sum.

// function sum() {
//     let firstNum = Number(prompt('Enter first number'));
//     let secondNum = Number(prompt('Enter second number'));
//     let result = firstNum + secondNum;
//     alert(`The sum of ${firstNum} and ${secondNum} is ${result}`);
// }
// sum();


// // Task 4
// // Write a function that takes num1, num2 & operator and computes the result.

// function calculator(num1, opera, num2) {
//     let result;

//     switch (opera) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             alert('Invalid Operator');
//             return;
//     }

//     alert(`Result: ${result}`);
// }

// let firstNumber = Number(prompt('Enter first number'));
// let operator = prompt('Enter operator (+, -, *, /)');
// let secondNumber = Number(prompt('Enter second number'));
// calculator(firstNumber, operator, secondNumber);


// // Task 5
// // Write a function that squares its argument.

// function square(num) {
//     let squared = num ** 2;
//     alert(`Square of ${num} is ${squared}`);
// }

// let number = Number(prompt('Enter number to be squared'));
// square(number);


// // Task 6
// // Write a function that computes factorial of a number.

// function factorial() {
//     let n = Number(prompt('Enter a number'));
//     let fact = 1;

//     if (n > 1) {
//         for (let i = n; i >= 1; i--) {
//             fact *= i;
//         }
//     }

//     document.write(`Factorial of ${n} is ${fact}`);
// }
// factorial();


// // Task 7
// // Write a function that takes start and end number as inputs & displays counting.

// function counting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(`${i}<br>`);
//     }
// }

// let start = Number(prompt("Enter start number for counting:"));
// let end = Number(prompt("Enter end number for counting:"));
// counting(start, end);


// // Task 8
// // Write a nested function that computes hypotenuse of a right-angled triangle.

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }

//     let hyp = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hyp;
// }

// let base = Number(prompt('Enter base of right-angle triangle'));
// let perpendicular = Number(prompt('Enter perpendicular of right-angle triangle'));
// let hyp = calculateHypotenuse(base, perpendicular);
// alert(`The hypotenuse of the right-angle triangle is ${hyp}`);


// // Task 9
// // Write a function that calculates the area of a rectangle (A = width * height).

// function areaCalculate(width, height) {
//     return width * height;
// }

// let width = Number(prompt('Enter width of rectangle'));
// let height = Number(prompt('Enter height of rectangle'));
// let areaResult = areaCalculate(width, height);
// document.write(`The area of rectangle is ${areaResult}`);


// // Task 10
// // Write a function that checks whether a passed string is palindrome or not.

// function palindrome(string) {
//     let reversed = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversed += string[i];
//     }

//     if (string.toLowerCase() === reversed.toLowerCase()) {
//         alert(`${string} is a palindrome word`);
//     } else {
//         alert(`${string} is not a palindrome word`);
//     }
// }

// let str = prompt('Write any word');
// palindrome(str);


// // Task 11
// // Convert the first letter of each word to uppercase.

// function upperCase(str) {
//     let arr = str.split(' ');
//     let newArray = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return newArray.join(' ');
// }

// let sentence = 'the quick brown fox';
// let resultSentence = upperCase(sentence);
// document.write(`EXAMPLE STRING: ${sentence}<br>`);
// document.write(`EXPECTED STRING: ${resultSentence}<br>`);


// // Task 12
// // Find the longest word in a string.

// function longest(str) {
//     let split = str.split(' ');
//     let longestWord = split[0];

//     for (let i = 1; i < split.length; i++) {
//         if (split[i].length > longestWord.length) {
//             longestWord = split[i];
//         }
//     }
//     return longestWord;
// }

// let text2 = 'Web Development Tutorial';
// let longestWord = longest(text2);
// document.write(`EXAMPLE STRING: ${text2}<br>`);
// document.write(`EXPECTED STRING: ${longestWord}<br>`);


// // Task 13
// // Count occurrences of a specific letter in a string.

// function count(str, letter) {
//     let find = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             find++;
//         }
//     }
//     return find;
// }

// let text3 = 'JSResourceS.com';
// let letter = 'o';
// let occurrences = count(text3, letter);
// document.write(`The occurrence of '${letter}' in "${text3}" is ${occurrences}`);


// // Task 14
// // The Geometrizer

// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     return circumference;
// }

// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     return area;
// }

// let radius = Number(prompt('Enter radius of circle'));
// let circumference = calcCircumference(radius);
// let area = calcArea(radius);

// document.write(`<br>The Circumference of circle is ${circumference.toFixed(2)}<br>`);
// document.write(`The Area of circle is ${area.toFixed(2)}<br>`);


// // -------- End of Chapter 35-38
