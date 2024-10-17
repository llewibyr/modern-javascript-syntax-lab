const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubleNums = nums.map(num => num * 2);

console.log(doubleNums);


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [third, second, first] = pizzaToppings;

console.log(first);
console.log(second);
console.log(third);

const duplicateArray = [...pizzaToppings];

console.log(duplicateArray);


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const {make, model} = car

  console.log(make);
  console.log(model);

  const clonedObject = {...car};
  
  console.log('Clone:', clonedObject);

  // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here


const userProfile = {}

const propertyName = 'username'
userProfile[propertyName] = 'balls'

console.log(userProfile);

function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
}

describeAnimal();

describeAnimal('cat', 'white');


// Convert the following `if...else` statement in to a ternary:

//let pizza = 'tasty';

//if (pizza === 'tasty') {
//  console.log('yum');
//} else {
//  console.log('yuck');
//}

// Your code here
let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');


// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';
// Log the result
console.log('User theme setting:', USER_THEME);


// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat; 
  
  // Your code here
  
  console.log(cat?.age);
  