// ----------- Chapter 26-30 Maths Methods ----------

// Task 1
let num1 = +prompt("Enter a positive number: ");
let round1 = Math.round(num1);
let floor1 = Math.floor(num1);
let ceil1 = Math.ceil(num1);

document.write(`Number: ${num1}<br>`);
document.write(`Round off value: ${round1}<br>`);
document.write(`Floor value: ${floor1}<br>`);
document.write(`Ceil value: ${ceil1}<br>`);

// Task 2
let num2 = +prompt("Enter a negative floating number: ");
let round2 = Math.round(num2);
let floor2 = Math.floor(num2);
let ceil2 = Math.ceil(num2);

document.write(`Number: ${num2}<br>`);
document.write(`Round off value: ${round2}<br>`);
document.write(`Floor value: ${floor2}<br>`);
document.write(`Ceil value: ${ceil2}<br>`);

// Task 3
let num3 = +prompt('Enter any number:');
let abs = Math.abs(num3);
document.write(`The absolute value of ${num3} is ${abs}<br>`);

// Task 4
let dice = Math.floor(Math.random() * 6) + 1;  // 1 to 6
document.write(`Random dice value: ${dice}<br>`);

// Task 5
let coin = Math.floor(Math.random() * 2) + 1;  // 1 or 2
let coinResult = coin === 1 ? "Heads" : "Tails";
document.write(`${coin}<br>Random coin value: ${coinResult}<br>`);

// Task 6
let randomNum = Math.ceil(Math.random() * 100); // 1 to 100
document.write(`Random number between 1 and 100: ${randomNum}<br>`);

// Task 7
let weight = prompt('Enter your weight in kilograms:');
let parsedWeight = parseFloat(weight);
document.write(`The weight of user is ${parsedWeight.toFixed(1)} kilograms<br>`);

// Task 8
let secretNumber = Math.ceil(Math.random() * 10); // 1 to 10
let userGuess = +prompt('Enter a number between 1 and 10:');

if (userGuess === secretNumber) {
    alert('🎉 Congratulations! You guessed the correct number!');
} else {
    alert(`❌ Try Again! The correct number was ${secretNumber}`);
}
