/* 
if(something){
   do something
   } 
   else {
   do something else
   }
*/

const id = 100;

// EQUAL TO
if(id == 100){
  console.log('id == 100 -> CORRECT'); 
} else {
  console.log('id == 100 -> INCORRECT');
}
// id == 100 -> CORRECT

// NOT EQUAL TO
if(id != 101){
  console.log('id != 101 -> CORRECT'); 
} else {
  console.log('id != 101 -> INCORRECT');
}
// id != 101 -> CORRECT

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('id === 100 -> CORRECT');
} else {
  console.log('id === 100 -> INCORRECT');
}
// id === 100 -> CORRECT

// EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('id !== 100 -> CORRECT');
} else {
  console.log('id !== 100 -> INCORRECT'); 
}
//id !== 100 -> INCORRECT

//Test if undefined
//id variable is created
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID present');
}
// The ID is 100

// idNum variable is not created
if(typeof idNum !== 'undefined'){
  console.log(`The ID is ${idNum}`);
} else {
  console.log('NO ID present');
}
//NO ID present

//GREATER OR LESS THAN
if(id <= 100){
  console.log('id <= 100 -> CORRECT'); 
} else {
  console.log('id <= 100 -> INCORRECT');
}
//id <= 100 -> CORRECT

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}
//Color is not red or blue

// LOGICAL OPERATORS

const Firstname = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(` age > 0 && age < 12 -> ${Firstname} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`age >= 13 && age <= 19 -> ${Firstname} is a teenager`);
} else //age > 19
{
  console.log(`age > 19 -> ${Firstname} is an adult`);
}

//age > 19 -> Steve is an adult

// OR ||
if(age < 16 || age > 65){
  console.log(`age < 16 || age > 65 -> ${Firstname} can not run in race`);
} else // age >= 16 && age <= 65
{
  console.log(`age >= 16 && age <= 65 -> ${Firstname} is registered for the race`);
}
//age < 16 || age > 65 -> Steve can not run in race

// WITHOUT BRACES
if(id === 100)
  console.log('id === 100 -> CORRECT'); //id === 100 -> CORRECT
else
  console.log('id === 100 -> INCORRECT');