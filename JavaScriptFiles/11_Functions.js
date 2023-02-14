/*
1. FUNCTION DECLARATION
2. FUNCTION EXPRESSIONS
3. IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
4. PROPERTY METHODS
*/


//FUNCTION DECLARATION
function greet(firstName = 'Sam', lastName = 'Bane') {
    console.log(`Hi ${firstName} ${lastName}`)
}

//No values in parameter
greet(); //Hi Sam Bane


//Input in parameter
greet('Priyam', 'Sahu')  //Hi Priyam Sahu

//incomplete parameter
greet('Priyam') //Hi Priyam Bane

//FUNCTION EXPRESSIONS

const square = function (num) {
    return (num * num);
}

console.log(square(8)); //64

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// Type 1: Non parameter
// (function () {
//     console.log('IIFEs')// IIFEs
// })()

//Comment to above line to run this Type 2
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