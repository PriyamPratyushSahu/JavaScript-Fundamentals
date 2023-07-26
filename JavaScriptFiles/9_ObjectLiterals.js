const person = {
    firstName: 'Priyam',
    lastName: 'Sahu',
    age: 23,
    email: 'priyampratyushsahoo3232@gmail.com',
    hobbies: ['music', 'reading' , 'cooking'],
    address: {
      city: 'Bhubaneswar',
      state: 'Bangalore'
    },
    getBirthYear: function(){
      return 2023 - this.age;
    }
}
  console.log(person);
/*
{firstName: 'Priyam',
 lastName: 'Sahu', 
 age: 36, 
 email: 'priyampratyushsahoo3232@gmail.com', 
 hobbies: (3) ['music', 'reading', 'cooking'],
 address: {city: 'Bhubaneswar', state: 'Bangalore'}
 age: 36
 email: "priyampratyushsahoo3232@gmail.com"
getBirthYear: ƒ ()
}
*/

  // Get specific value
console.log(person.firstName); //Priyam

//console.log(person['firstName']);
//Works same as above
   
  console.log(person['lastName']); //Sahu
console.log(person.age); //23

//console.log(person['age'])
//Works same as above
console.log(person.hobbies[1]); //reading

//console.log(person['hobbies'][1]);
//Works same as above
console.log(person.address.state); //Bangalore

//console.log(person['address'].state);
//Works same as above
console.log(person.address['city']); //Bhubaneswar

//console.log(person['address'].city);
//Works same as above

console.log(person.getBirthYear()); // 2000
  
  const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    { name: 'Nancy', age: 40 },
    {name: 'Lisa', age: 17}
];
  
for(let i = 0; i < people.length; i++)
    console.log(people[i])
    /*
    {name: 'John', age: 30}
    {name: 'Mike', age: 23}
    {name: 'Nancy', age: 40}
    {name: 'Lisa', age: 17}
     */
  
  for(let i = 0; i < people.length; i++){
      console.log(`${people[i].name} , ${people[i].age}`);
}
  /*
      John , 30
      Mike , 23
      Nancy , 40
      Lisa , 17
*/
for(let i = 0; i < people.length; i++)
    console.log(`${people[i]}`)
//Print 4 time -> [object Object]