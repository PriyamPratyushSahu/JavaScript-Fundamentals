var first_name = 'Priyam';
var last_name = 'Sahu';
console.log('Full Name: ' + first_name + ' ' + last_name); //Full Name: Priyam Sahu

//Template Literals
console.log(`Hi ${first_name} ${last_name}`); //Hi Priyam Sahu

const full_name = 'Priyam Pratyush Sahu';
console.log(full_name); //Priyam Pratyush Sahu
// cannot change full_name : Uncaught TypeError: Assignment to constant variable.
// full_name = 'Priyam'

//but can be assigned to const objects

const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
//This way can be changed
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

const person = {
    name: 'Priyam',
    age: 22
}
console.log(person); //{name: 'Priyam', age: 22}
//This way can be changed
person.name = 'Pratyush'
person.age = 25
console.log(person); //{name: 'Pratyush', age: 25}
