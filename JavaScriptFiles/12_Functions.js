/*
1. FUNCTION DECLARATION
    Type 1: Neither takes nor returns
    Type 2 : Takes but does not returns
    parameter initialized with default value
    Type 3: Does not takes but returns
    Type 4 : Takes as well as returns

2. FUNCTION EXPRESSIONS
    Arrow Function
        Single Line body
        Multi Line body
        Multi Parameter 
3. IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
4. PROPERTY METHODS
*/

//FUNCTION DECLARATION

//Type 1: Neither takes nor returns
function greet1() {
    console.log("Hi Everyone");
}
//No values in parameter
greet1();

//Type 2 : Takes but does not returns

function greet2(firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName}`)
}
//Input in parameter
greet2('Priyam', 'Sahu')  //Hi Priyam Sahu

//parameter initialized with default value
function greet3(firstName = 'Sam', lastName = 'Bane') {
    console.log(`Hi ${firstName} ${lastName}`)
}
greet3(); //Hi Sam Bane
greet3('Priyam') //Hi Priyam Bane

//Type 3: Does not takes but returns
function greet4() {
    console.log('Hi Everyone')
    return "Bye"
}
console.log(greet4())
/*Hi Everyone 
Bye
*/
//Type 4 : Takes as well as returns

function greet5(firstName = 'Sam', lastName = 'Bane') {
    console.log(`Hi ${firstName} ${lastName}`)
    return "Bye"
}
console.log(greet5('Priyam', 'Sahu'))
/*Hi Priyam Sahu
Bye
*/

//FUNCTION EXPRESSIONS

const square = function (num) {
    return (num * num);
}

console.log(square(8)); //64

//Arrow Function

//Single Line body
const calculateAge = birthYear => 2023 - birthYear

const calAge = calculateAge(2000);
console.log(calAge); //23

//Multi Line body
const yearUntilRetirement = birthYear => {
    const age = calculateAge(birthYear);
    return 65 - age;
}

console.log(yearUntilRetirement(2000));

//Multi Parameter 
const multiParameter = (val1, val2, val3) => {
    console.log(`${val1} , ${val2} , ${val3}`) 
}
multiParameter(1, 2, 4);
//1 , 2 , 4

const FullName = (firstName, lastName) => {
    console.log(`Full Name: ${firstName} ${lastName}`)
}

FullName('Priyam', 'Sahu');
//Full Name: Priyam Sahu

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

//Comment Type 2 to run Type 1
// Type 1: Non parameter
// (function () {
//     console.log('IIFEs')// IIFEs
// })()

//Comment Type 1 to run this Type 2
//// Type 2: Parameterised
(function (Fullname) {
    console.log(`Hi ${Fullname}`)// Hi Priyam Pratyush Sahu
})('Priyam Pratyush Sahu')

//PROPERTY METHODS

const todoList = {
    //Function 1
    add: function () {
        console.log("Add to list")
    },

    //Function 2
    modify: function (id) {
        console.log(`Id ${id} modified`)
    }
}

todoList.add() //Add to list
todoList.modify(10) // Id 10 modified

//Adding function outside the block
//Function 3
todoList.delete = function(id){
    console.log(`Id ${id} deleted!`)
}

todoList.delete(6) // Id 6 deleted


var k = 1

function update(val = 0) {
    k += val
    return k++
}
console.log(update(),update(1),update(2)) //1 3 6