/*
1. Primitive Datatype
2. Reference Types - Objects
3. Dynamically Typed
*/

//Primitive Datatype

//String
const fullName = 'Priyam Pratyush Sahu'
console.log(fullName) //Priyam Pratyush Sahu
console.log(typeof (fullName)) //string

//Number
const age = 23
console.log(age) //23
console.log(typeof (age)) //number

//Boolean
const isMarried = false
console.log(isMarried) //false
console.log(typeof (isMarried)) //boolean

//Null
console.log(typeof (null)) //object

//Undefined
let a
console.log(a) //undefined
console.log(typeof (a)) //undefined
console.log(typeof (undefined)) //undefined

//Symbol
const sym = Symbol();
console.log(sym) //Symbol()

//Reference Types - Objects

//Array
const hobbies = ['reading', 'music', 'cooking']
console.log(hobbies) // ['reading', 'music', 'cooking']
console.log(typeof (hobbies)) //object

//Object Literal
const address = {
    state: 'Odisha',
    country: 'India'
}
console.log(address) //{state: 'Odisha', country: 'India'}
console.log(typeof (address)) //object

//Dynamically Typed

let dynamicVar

dynamicVar = 1;
console.log(typeof (dynamicVar)) //number

dynamicVar = "Hi"
console.log(typeof (dynamicVar)) //string

dynamicVar = true
console.log(typeof (dynamicVar)) //boolean

dynamicVar = null
console.log(typeof (dynamicVar)) //object

dynamicVar = [1, 2, 3, 4]
console.log(typeof (dynamicVar)) //object