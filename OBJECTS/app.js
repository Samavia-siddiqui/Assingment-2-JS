// question 1


let itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

let totalAllItems = 0;

for (let i = 0; i < itemsArray.length; i++) {
    let item = itemsArray[i];
    let itemTotal = item.price * item.quantity;

    console.log(item.name + " total price = " + itemTotal);

    totalAllItems += itemTotal;
}

console.log("Total price of all items = " + totalAllItems);


// question2

let user = {
    name: "Ali",
    email: "ali@gmail.com",
    password: "12345",
    age: 25,
    gender: "male",
    city: "Karachi",
    country: "Pakistan"
};

console.log("age exists? " + user.hasOwnProperty("age"));
console.log("country exists? " + user.hasOwnProperty("country"));

console.log("firstName exists? " + user.hasOwnProperty("firstName"));
console.log("lastName exists? " + user.hasOwnProperty("lastName"));


// question3
function Student(name, age, rollNo) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
}

let student1 = new Student("Ali", 20, 101);
let student2 = new Student("Sara", 22, 102);
let student3 = new Student("Usman", 19, 103);

console.log(student1);
console.log(student2);
console.log(student3);


// question4
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

let people = [];

let p1 = new Person("Ali", "male", "Karachi", "Intermediate", "Engineer");
let p2 = new Person("Sara", "female", "Lahore", "Masters", "Teacher");

people.push(p1);
people.push(p2);

console.log("People Records:", people);

