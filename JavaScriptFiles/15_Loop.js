// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }
  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number '+ i);
}
/*
Number 0
Number 1
2 is my favorite number
Number 3
Number 4
Stop the loop
 */

// WHILE LOOP
console.log('While Loop')
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}
/*
While Loop
Number 0
Number 1
Number 2
Number 3
Number 4
Number 5
Number 6
Number 7
Number 8
Number 9
*/

// DO WHILE
console.log('Do while Loop')
i = 0;

do {
  console.log('Number ' + i);
  i++;
}

while (i < 10);

/*
Do while Loop
Number 0
Number 1
Number 2
Number 3
Number 4
Number 5
Number 6
Number 7
Number 8
Number 9
*/

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}
/*
Ford
Chevy
Honda
Toyota
 */

 // FOREACH -> Self calling function

//Type 1
cars.forEach(function(car){
  console.log(car);
});
/*
Ford
Chevy
Honda
Toyota
 */
//Type 2 ->(current value, index value)

cars.forEach(function(car, index, arr){
  console.log(`-> ${index} : ${car}`);
});
/*
-> 0 : Ford
-> 1 : Chevy
-> 2 : Honda
-> 3 : Toyota
 */

//Type 3 ->(current value, index value, array of the current element)
//2nd and 3rd parameter are optional

cars.forEach(function(car, index, arr){
  console.log(arr[index]);
});

/*
Ford
Chevy
Honda
Toyota
 */

// MAP
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];
//Returns ids
const ids = users.map(function(user){
  return user.id;
});

console.log(ids);
//[1, 2, 3, 4]


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
/*
firstName : John
lastName : Doe
age : 40
*/
let dice = Math.trunc(Math.random() * 6) ;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...'); 
}
/*
You rolled a 4
15_Loop.js:156 You rolled a 3
15_Loop.js:156 You rolled a 4
15_Loop.js:158 Loop is about to end...
 */