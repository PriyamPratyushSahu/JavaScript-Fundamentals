console.log('Hello World'); //Hello 
console.log(123); //123
console.log(true); //true

var greetings = 'Hi Everyone';
console.log(greetings) //Hi Everyone

//Array
console.log([1, 2, 3, 4]);
 //[1, 2, 3, 4]

//Objects
console.log({ a: 1, b: 2 })
//{a: 1, b: 2}

console.table({ a: 1, b: 2 })
/*
(index)             Value
    a	              1
    b	              2
Object
*/

//To show error
console.error("! ! ! !This is  an error ! ! ! !");
// ! ! ! !This is an error ! ! ! !

//To show warning
console.warn("This is a warning")
// This is a warning

//To clear the console
//console.clear()

//Time
console.time('Hello') //Start time
console.timeEnd('Hello') //End time
// Hello: 0.003173828125 ms
