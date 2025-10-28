


// ----------- Chapter 31-34 Date Methods ----------

// Task 1
// Write a program that displays current date and time in your browser. 

// let date = new Date();
// document.write(`${date}`)


// Task 2
// Write a program that alerts the current month in words. For example December.

// let date = new Date();
// let month = date.getMonth();

// let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write(`Current Month: ${mlist[month]}`);


// Task 3
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// let date = new Date();
// let day = date.getDay();
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// document.write(`Today is ${days[day].slice(0, 3)}`);


// Task 4
// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// let date = new Date();
// let day = date.getDay();
// if (day === 0 || day === 6) {
//     alert("It's Fun day");
// } else {
//     alert("Today is not Fun day");
// }


// Task 5
// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// let datenow = new Date();
// let date = datenow.getDate();
// if (date < 16) {
//     document.write(`First fifteen days of the month`);
// } else {
//     document.write(`Last days of the month`);
// }


// Task 6
// Write a program that determines the minutes since midnight, Jan. 1, 1970.

// let dateNow = new Date();
// let millisec = dateNow.getTime();
// document.write(`Current Date: ${dateNow}<br>`);
// document.write(`Elapsed milliseconds since January 1, 1970: ${millisec}<br>`);
// document.write(`Elapsed minutes since January 1, 1970: ${(millisec / (1000 * 60)).toFixed(2)}<br>`);


// Task 7
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// let dateNow = new Date();
// let hours = dateNow.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


// Task 8
// Write a program that creates a Date object for the last day of the last month of 2020.

// let todayDate = new Date();
// let laterDate = new Date('December 31, 2020');
// document.write(`${laterDate}`);


// Task 9
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan.

// let dateToday = new Date();
// let todayMilli = dateToday.getTime();
// let lastRamadan = new Date('June 18, 2015');
// let milliRamdan = lastRamadan.getTime();
// let diffMilliSec = todayMilli - milliRamdan;
// let daysPassed = Math.floor(diffMilliSec / (1000 * 60 * 60 * 24));
// document.write(`${daysPassed} days have passed since 1st Ramadan, 2015`);


// Task 10
// Write a program that displays the seconds that elapsed between the reference date and the beginning of 2015.

// let dateNow = new Date();
// let todayMilli = dateNow.getTime();
// let year2015 = new Date('January 1, 2015');
// let milli2015 = year2015.getTime();
// let diffMilliSec = todayMilli - milli2015;
// let seconds = Math.floor(diffMilliSec / 1000);
// document.write(`On reference date: ${dateNow}<br>${seconds} seconds had passed since beginning of 2015`);


// Task 11
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display it.

// let today = new Date();
// document.write(`Current date: ${today}<br>`);
// today.setHours(today.getHours() - 1);
// document.write(`1 hour ago, it was ${today}`);


// Task 12
// Write a program that creates a date object and show the date 100 years back.

// let today = new Date();
// document.write(`Current date: ${today}<br>`);
// today.setFullYear(today.getFullYear() - 100);
// document.write(`100 years back, it was ${today}`);


// Task 13
// Write a program to ask the user about his age. Calculate and show his birth year.

// let age = +prompt('Enter your age');
// let today = new Date();
// let yearNow = today.getFullYear();
// let birthYear = yearNow - age;
// document.write(`Your age is ${age}<br>Your birth year is ${birthYear}`);


// Task 14
// Write a program to generate your K-Electric bill.

// let customerName = 'Tayyaba Ali';
// let today = new Date();
// let month = today.getMonth();
// let mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let noUnits = 410;
// let chargePerUnit = 16;
// let netAmount = noUnits * chargePerUnit;
// let lastCharge = 350;
// let afterDueDate = netAmount + lastCharge;

// document.write(`<h1>K-Electric Bill</h1>`);
// document.write(`Customer Name: ${customerName}<br>`);
// document.write(`Month: ${mlist[month]}<br>`);
// document.write(`Number of Units: ${noUnits}<br>`);
// document.write(`Charges per Unit: ${chargePerUnit}<br><br>`);
// document.write(`Net Amount Payable (Within Due Date): ${netAmount.toFixed(2)}<br>`);
// document.write(`Late Payment Surcharge: ${lastCharge.toFixed(2)}<br>`);
// document.write(`Gross Amount Payable (After Due Date): ${afterDueDate.toFixed(2)}<br>`);