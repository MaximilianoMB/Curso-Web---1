// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
const a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age, eyeColor} = person;



// Object properties
var a = 'test';
var b = true;
var c = 789;

const okObj = {a, b, c};



// Template strings
var message = `Hello  ${firstName}, have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age=10) => age; 

// Symbol
// Create a symbol: "This is my first Symbol"

const simbolo = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}