const firstName = 'Priyam';
const lastName = 'Sahu';

const str = 'Welcome to JavaScript';
const tags = 'web development,programming';
let val;

console.log(firstName + lastName); //PriyamSahu

// Concatenation
console.log(firstName + ' ' + lastName); //Priyam Sahu

// Append
val = 'Hi ';
val += 'There';
console.log(val); //Hi There

console.log('Hello, my name is ' + firstName); //Hello, my name is Priyam

// Escaping
console.log( 'That\'s awesome, I can\'t wait'); //That's awesome, I can't wait

// Length
console.log(firstName.length); //6

// concat()
console.log(firstName.concat(' ', lastName)); //Priyam Sahu

// Change case
console.log(firstName.toUpperCase()); //PRIYAM
console.log(firstName.toLowerCase()); //priyam

console.log(firstName[2]); //i

// indexOf()
console.log(firstName.indexOf('i')); // 2
console.log(firstName.lastIndexOf('m')); // 5

// charAt()
console.log(firstName.charAt('4')); //a
// Get last char
console.log(firstName.charAt(firstName.length - 1)); // m

// substring()
console.log(firstName.substring(0, 4)); //Priy

// slice()
console.log(firstName.slice(0,4)); //Priy
console.log(firstName.slice(-3)); //yam

// split()
console.log(str.split(' ')); // ['Welcome', 'to', 'JavaScript']
console.log(tags.split(',')); //['web development', 'programming']

// replace()
console.log(str.replace('JavaScript', 'Web')); //Welcome to Web

// includes()
console.log(str.includes('to')); //true

const name = 'John';
const job = 'Web Developer';
const age = 23;
const city = 'Miami';
let html;

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

/*
Name: John
Age: 23
Job: Web Developer
City: Miami
4
hello
Under 30
*/

document.body.innerHTML = html;