//----------CHAPTER 38-42
// ------TASK 1
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(num, power) {
    let result = num ** power;
    return result;
}

let a = +prompt('Enter number ');
let b = +prompt('Enter power');
let powerResult = power(a, b);
document.write(`${a}<sup>${b}</sup> is ${powerResult}`);

// Task 2
// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

let userYear = prompt('Enter the year');
switch (userYear) {
    case '2012':
    case '2016':
    case '2020':
        alert('Leap Year');
        break;
    default:
        alert('Not a leap year');
}

// Task 3
// Area of a triangle using formula: area = S(S − a)(S − b)(S − c), where S = ( a + b + c ) / 2

function area(s1, s2, s3) {
    let S = findS(s1, s2, s3);
    let area = S * (S - s1) * (S - s2) * (S - s3);
    return area;
}

function findS(a, b, c) {
    let find = (a + b + c) / 2;
    return find;
}

let sideA = +prompt('length a');
let sideB = +prompt('length b');
let sideC = +prompt('length c');
let areaResult = area(sideA, sideB, sideC);
document.write(`The area of triangle is ${areaResult}`);

// Task 4
// Calculate average and percentage

function mainFunction() {
    let sub1 = +prompt('Enter first subject marks');
    let sub2 = +prompt('Enter second subject marks');
    let sub3 = +prompt('Enter third subject marks');
    let total = +prompt('Enter total marks');
    let average = ave(sub1, sub2, sub3);
    let per = percen(sub1, sub2, sub3, total);

    document.write(`<h3>Average is</h3>${average}<br>`);
    document.write(`<h3>Percentage is</h3>${per} %<br>`);
}

function ave(a, b, c) {
    let av = (a + b + c) / 3;
    av = av.toFixed(2);
    return av;
}

function percen(a, b, c, total) {
    let percentage = ((a + b + c) / total) * 100;
    percentage = percentage.toFixed(2);
    return percentage;
}
mainFunction();

// Task 5
// Custom function to find index of a character

function index(str, char) {
    let no;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            no = i;
            break;
        }
    }
    return no;
}

let str = 'hello world';
let indexOfChar = prompt('Write character to find ');
let result = index(str, indexOfChar);
document.write(`The indexOf ${indexOfChar} is ${result}`);

// Task 6
// Remove all vowels from a sentence

let sentence = prompt('Enter sentence to delete vowels in them');

function removeVowels(sentence) {
    let removed = '';
    for (let i = 0; i < sentence.length; i++) {
        if ('aeiouAEIOU'.includes(sentence[i])) {
            continue;
        } else {
            removed += sentence[i];
        }
    }
    return removed;
}

let resultSentence = removeVowels(sentence);
document.write(`Before: ${sentence}<br>`);
document.write(`After: ${resultSentence}<br>`);

// Task 7
// Count occurrences of two vowels in succession

let str2 = 'Please read this application and give me gratuity';
let occurence = [];
let count = 0;

function findOccurence() {
    let chars = str2.toLowerCase().split('');
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let next = chars[i + 1];
        if (isCorrectCharc(char) && isCorrectCharc(next)) {
            count++;
            let twoChar = char + next;
            occurence.push(twoChar);
        }
    }
    return count;
}

function isCorrectCharc(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

let countResult = findOccurence();
document.write(`String: ${str2}<br>`);
document.write(`Count: ${countResult}<br>`);
document.write(`Occurrences: ${occurence}<br>`);

// Task 8
// Convert distance between cities into meters, feet, inches, centimeters

let distance = +prompt("Enter distance from city A to City B in KM: ");
meter(distance);
feet(distance);
inches(distance);
centimeters(distance);

function meter(dis) {
    let meterDistance = dis * 1000;
    document.write(`Distance between city A to city B is ${meterDistance} meters.<br>`);
}

function feet(dis) {
    let feetDistance = dis * 3281;
    document.write(`Distance between city A to city B is ${feetDistance} feet.<br>`);
}

function inches(dis) {
    let inchDistance = dis * 39370;
    document.write(`Distance between city A to city B is ${inchDistance} inches.<br>`);
}

function centimeters(dis) {
    let centimeterDistance = dis * 100000;
    document.write(`Distance between city A to city B is ${centimeterDistance} centimeters.<br>`);
}

// Task 9
// Overtime pay calculation

let workingHours = +prompt("Enter your working hours: ");
let overTime, overTimePay;
let overTimeHourPay = 12;

if (workingHours > 40) {
    overTime = workingHours - 40;
    overTimePay = overTime * overTimeHourPay;
    alert(`Your overtime pay cost is: ${overTimePay} rupees`);
} else {
    alert("You need to work more to get overtime");
}

// Task 10
// Currency notes calculation

let amount =Number(prompt("Enter amount to Withdraw"));
let hundred = parseInt(amount / 100);
let fifty = parseInt((amount % 100) / 50);
let ten = parseInt((((amount % 100) % 50) / 10));

document.write(`Entered amount: ${amount}<br>`);
document.write(`You will have ${hundred} hundred notes, ${fifty} fifty notes, and ${ten} ten notes.`);
