num = '10'
console.log(num) //10
console.log(typeof (num)) //string
console.log(num + 10) //1010

console.log('There are ' + 5 + ' Boxes') //There are 5 Boxes
//Automatically 5 becomes '5'


const value1 = "10";
const value2 = 4;
let sum = value1 + value2;


console.log(sum); //104
console.log(typeof(sum)); //string
console.log(`Sum: ${Number(value1) + value2}`) // Sum: 14

// minus, multiplication, division operators triggers to opposite conversion, strings are converted to numbers

let sub = value1 - value2
console.log(sub); //6
console.log(typeof(sub)); //number

let multi = value1 * value2
console.log(multi); //40
console.log(typeof(multi)); //number

let div = value1 / value2
console.log(div); //2.5
console.log(typeof (div)); //number

console.log(2 + 3 + 4 + '5') //95 (string)
console.log('10' - '4' - '3' - 2 + '5') //(6 - '3' - 2 + '5') -> (3 - 2 + '5') -> (1 + '5') -> 15 (string)