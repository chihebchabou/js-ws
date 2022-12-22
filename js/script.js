console.log('Hello F2');

// Declaration of variables
var name = 'Jane';
var age = 25;
var isAlive = true;
var x;
var y = null;
var z = undefined;

// Declaration of object literal
var person = {
  fullName: 'John Doe',
  age: 30,
  isAlive: true,
  address: '1002 Fake Street',
};

// Declaration of Array
var cars = ['Opel', 'BMW', 'Peugaot'];

// Type of data
console.log('type of name is ' + typeof name);
console.log('type of age is ' + typeof age);
console.log('type of isAlive is ' + typeof isAlive);
console.log('type of x is ' + typeof x);
console.log('type of y is ' + typeof y);
console.log('type of z is ' + typeof z);
console.log('type of person is ' + typeof person);
console.log('type of cars is ' + typeof cars);

// log to the console "My name is John"
console.log('My name is ' + name);

// log to the console "I am 25 years old"
console.log('I am ' + age + ' years old');

// log to the console person's full name
// Get fullName Dot notation
var dotName = person.fullName;
console.log(dotName);

// Get fullName bracket notation
var bracketName = person['fullName'];
console.log(bracketName);

// Set new property id: Dot notation
person.id = 1;

// Set new property id: bracket notation
person['profession'] = 'Web Developer';

// Update full name
person.fullName = 'Jane Doe';
console.log(person.fullName);
console.log(person);

// Length of array
const carsLength = cars.length;
console.log(cars);
console.log('length of cars: ' + carsLength);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log('----------------');
// Loop through cars using for loop
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
}

console.log('----------------');
// Loop through cars using forof
for (const car of cars) {
  console.log(car);
}

console.log('----------------');
// Loop through object
for (const key in person) {
  console.log(key + ': ' + person[key]);
}

console.log('----------------');

var count = 0;
// do while loop
console.log('using do while loop');
do {
  console.log(count);
  count++;
} while (count < 10);

var count2 = 0;
// while loop
console.log('using while loop');
while (count2 < 10) {
  console.log(count2);
  count2++;
}

// if else
var age = 10;
if (age <= 10) {
  console.log('child');
} else if (age < 18) {
  console.log('teenager');
} else {
  console.log('adult');
}

console.log('----------------');
/*
NB:
We dont use 
interval in switch case
*/
switch (age) {
  case 10:
    console.log('child');
    break;
  case 18:
    console.log('teenager');
    break;
  default:
    console.log('adult');
    break;
}

// Function
function greeting(name) {
  console.log('Hello ' + name);
  return 'Hello ' + name;
}

// greeting('Jane');
var res = greeting('John');
var res2 = greeting(person.fullName);
console.log(res);
console.log(res2);
