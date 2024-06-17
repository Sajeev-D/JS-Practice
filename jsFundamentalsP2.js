'strict mode';

// const age = 19;
// console.log(age);
// const drink = age > 18 ? console.log("Is an adult") : console.log("Not an adult");

// const bill = 275;

// /* Write your code below. Good luck! 🙂 */

// const tip = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
// console.log("The bill was " + bill + ", the tip was " + (bill * tip) + " and the total value " + (bill + (bill * tip))); 

// JavaScript Fundamentals part 2

/* Class 32: Activating Strict Mode 

'use strict'; // Stric mode activated: prevents from using undeclared variables

let hasDriversLicense = false;
const passTest = true;

if(passTest == true) hasDriversLicense = true;
console.log(hasDriversLicense);

const interface = "Audio"; // interface is a reserved word in JS, so it can't be used as a variable name

*/

/*Class 33: Functions

function logger(){ // function declaration is similar to C++
    console.log("My name is Sajeev");
}

logger(); // calling the function

function fruitProcessor(apples, oranges){
    console.log("Fruit function called");
    const juice = `Juice with ${apples} apples and ${oranges} oranges`; // ${} is used to insert variables into strings
    return juice;
} // do not have to specify return type in JS

const apple = 3;
const orange = 4; // JS variable have no type, they are dynamically typed

console.log(fruitProcessor(apple, orange));
*/

/* Class 34: Function Declarations vs. Expressions

function calcAge(bithYear){ // function declaration
    return 2050 - bithYear;
}

const age1 = calcAge(1968);
console.log(age1);

const calcAge2 = function(birthYear){ // function expression
    return 2050 - birthYear;
}

const age2 = calcAge2(1968);
console.log(age2);
*/

/* Class 35: Arrow Functions

const calcAge2 = function(birthYear){ // function expression
    return 2050 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear; // arrow function 

console.log(calcAge3(1968));

const yearsTillRetirement = birthYear => { // the parameters are after the = sign and the definition is after the => sign
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsTillRetirement(1968));

*/

/* Class 36: Functions Calling Other Functions

function fruitProcessor(apples, oranges){
    console.log("Fruit function called");
    const juice = `Juice with ${apples} apples and ${oranges} oranges`; 
    return juice;
}

function cutFruits(fruit){
    return fruit * 4;
}

function fruitProcessor2(apples, oranges){
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges);
    console.log("Fruit function called");
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor2(2,3));

*/

/*************************** Class 37: Reviewing Functions*/

/*Challenge 1

const calcAverage = (score1, score2, score3) => (score1+ score2+ score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);

let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner (scoreDolphins, scoreKoalas) {
    if (scoreDolphins > 2*scoreKoalas) {
        console.log("Dolphins win (${scoreDolphins} vs. ${scoreKoalas})");
    } else if (2*scoreDolphins < scoreKoalas) {
        console.log("Koalas win (${scoreDolphins} vs. ${scoreKoalas})");
    } else {
        console.log("No team wins...");
    }
} */

/************************* Class 39: Introduction to Arrays


const friend1 = 'ABC';
const friend2 = 'DEF';
const friend3 = 'GHI';

const friends = ['ABC', 'DEF', 'GHI']; // array declaration

console.log(friends[1]);

const years = new Array(1910, 1911, 1912, 1913); // another way to declare an array

console.log(years.length); // length of the array

years[0] = 2020;

console.log(years);

// years = ['a', 'b', 'c']; // can't reassign the array, but can change the elements

const DS = [years, friends]; // array within an array

console.log(DS); */

/*************************** Class 40: Basic Array Operations (Methods)

const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // adds an element to the end of the array

numbers.unshift(0); // adds an element to the beginning of the array

numbers.pop(); // removes the last element of the array

numbers.shift(); // removes the first element of the array

console.log(numbers.includes(7)); // checks if the element is present in the array

*/

/*************************** Class 42: Introduction to Objects

const sajeev = {
    firstName: 'Sajeev',
    lastName: 'Debnath',
    age: 19,
    job: 'Student',
    friends: ['ABC', 'DEF', 'GHI']
};

// Use objects to group together different variables that belong together.

// Objects vs array: Array needs order, objects do not need order. Objects have key-value pairs.

console.log(sajeev);
*/

/*************************** Class 43: Dot vs. Bracket Notation

const sajeev = {
    firstName: 'Sajeev',
    lastName: 'Debnath',
    age: 19,
    job: 'Student',
    friends: ['ABC', 'DEF', 'GHI']
};

console.log(sajeev.lastName); // accessing the object using dot notation

console.log(sajeev['age']) // accessing the object using bracket notation

console.log(sajeev['jo' + 'b']) // can also use expressions in bracket notation

const string = prompt('What do you want to know about Sajeev?');

console.log(sajeev[string]); // using bracket notation to access the object

if(!sajeev[string]){
    console.log('Wrong request!');
} 

console.log(sajeev[string] + " has " +  sajeev.friends.length + " friends" + " and his best friend is " + sajeev.friends[0]);
*/

/*************************** Class 44: Object Methods

const sajeev = {
    firstName: 'Sajeev',
    lastName: 'Debnath',
    age: 19,
    job: 'Student',
    friends: ['ABC', 'DEF', 'GHI'],
    birthYear: 2004,
    hasDriversLicense: true,

    calcAge: function(){ // method inside an object
        return 2024 - this.birthYear;
    }, // this keyword is used to access the object properties

    getSummary: function(){
        if(this.hasDriversLicense){
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has a driver's license.`;
        } else {
            return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has no driver's license.`;
        }
    }
};

console.log(sajeev.getSummary());*/

/*************************** Challenge 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmi: 0,
    
    calcBMI: function() {
        this.bmi = (this.mass / ((this.height)*(this.height)))
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    bmi: 0,
    
    calcBMI: function() {
        this.bmi = (this.mass / ((this.height)*(this.height)))
        return this.bmi
    }
};


if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}*/















