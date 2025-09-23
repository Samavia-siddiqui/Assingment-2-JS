// question01
// let city = prompt (' what is your city name ?')
// let result = ( city === "karachi") ? "welcome to the city of light" : `welcome to city ${city}`  ;
// alert ( result)

// QUSETION02
// let gender = prompt (' what is your gender ?')
// let message = (gender === "female") ? "hello Mam .How are you " :  "hello sir.How are you" 
// alert (message) ;

// QUESTION NO 3
// let colour = prompt( " what is the color of traffic light ?")
// let result = ( colour ==="red") ? "must stop" 
// : ( colour === "yellow" ) ? " ready to move "
//  :  ( colour === "green" ) ? " Move now " : " this color is not include in traffic light " ;
//  alert( result)

// question04
// let fuel = + prompt ( " write your current fuel quantity ?");
// let result = ( fuel <= 0.25 ) ? "Please refill the fuel in your car"
// : ( fuel >= 1.2 )? " your fuel is in good condition" : " your fuel rate is fine"
// alert ( result)
// // question 05

// let a = 4;
// (++a === 5) ? alert("given condition for variable a is true") : null;

// let b = 82;
// (b++ === 83) ? alert("given condition for variable b is true") : null;

// let c = 12;
// (c++ === 13) ? alert("condition 1 is true") : null;
// (c === 13) ? alert("condition 2 is true") : null;
// (++c < 14) ? alert("condition 3 is true") : null;
// (c === 14) ? alert("condition 4 is true") : null;

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;

// (totalCost === laborCost + materialCost) ? alert("The cost equals") : null;

// (true) ? alert("True") : null;
// (false) ? alert("False") : null;

// ("car" < "cat") ? alert("car is smaller than cat") : null;

// question 06
// let m1 = Number(prompt("Enter marks obtained in Subject 1:"));
// let m2 = Number(prompt("Enter marks obtained in Subject 2:"));
// let m3 = Number(prompt("Enter marks obtained in Subject 3:"));

// let maxMarksPerSubject = 100;
// let total = maxMarksPerSubject * 3;  
// // Validate inputs
// if (m1 < 0 || m2 < 0 || m3 < 0 || m1 > maxMarksPerSubject || m2 > maxMarksPerSubject || m3 > maxMarksPerSubject) {
//   alert("Please enter valid marks between 0 and " + maxMarksPerSubject);
// } else {
//   let obtained = m1 + m2 + m3;
//   let percentage = (obtained / total) * 100;

//   let grade = (percentage >= 80) ? "A+" 
//             : (percentage >= 70) ? "A" 
//             : (percentage >= 60) ? "B" 
//             : (percentage >= 50) ? "C" 
//             : "F";

//   let remarks = (percentage >= 80) ? "Excellent" 
//               : (percentage >= 70) ? "Good" 
//               : (percentage >= 60) ? "You need to improve" 
//               : (percentage >= 50) ? "Better luck next time" 
//               : "Fail";

//   document.write(
//     `Total Marks: ${total}\n` +
//     `Marks Obtained: ${obtained}\n` +
//     `Percentage: ${percentage.toFixed(2)}%\n` +
//     `Grade: ${grade}\n` +
//     `Remarks: ${remarks}`
//   );
// }
// QUESTION NO 7
// let hiddenNumber = (7) ;
// let guessNumber = +(prompt("Lets! Play a game. I hided a number between 1 to 10 you have to guess it ! "))
// let answer = (guessNumber === hiddenNumber) ? " Congatulations! Your answer is correct ." : 
//              (guessNumber === hiddenNumber + 1) ?" Close enough to the correct answer" :
//              (guessNumber === hiddenNumber - 1) ? "You are almost there !" : 
//              "You are too far to the right answer! "
//              alert ( answer ) ;



// // QUESTION NO 8 
// let number = prompt (" Type a number to check either its divisible by 3 or not ?");
// let result = (number % 3 === 0) ? (`${number} is divisible by 3`) : (`${number} is not divisible by 3`)
// alert (result)






// // QUESTION NO 9
// let number = prompt (" Type a number to check either its even or odd ?");
// let result = (number / 2 ) ? (`${number} is an Even number`) : (`${number} is an Odd number`)
// alert (result)

// // QUESTION NO 10
// // Take temperature input from user
// let T = Number(prompt("Enter the temperature:"));
// // Show message based on temperature using ternary operators
// (T > 40) ? alert("It is too hot outside.") :
// (T > 30) ? alert("The Weather today is Normal.") :
// (T > 20) ? alert("Today’s Weather is cool.") :
// (T > 10) ? alert("OMG! Today’s weather is so Cool.") :
// alert("It's cold outside.");

// // QUESTION NO 11
// // Take input from user
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let op = prompt("Enter operation (+, -, *, /, %):");
// // Calculate and show result using ternary operators
// (op === "+") ? alert("Result: " + (num1 + num2)) :
// (op === "-") ? alert("Result: " + (num1 - num2)) :
// (op === "*") ? alert("Result: " + (num1 * num2)) :
// (op === "/") ? (num2 !== 0 ? alert("Result: " + (num1 / num2)) : alert("Error: Cannot divide by zero.")) :
// (op === "%") ? (num2 !== 0 ? alert("Result: " + (num1 % num2)) : alert("Error: Cannot modulus by zero.")) :
// alert("Invalid operation entered!");
