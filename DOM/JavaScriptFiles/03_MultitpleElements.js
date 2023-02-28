// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items); //HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

console.log(items[0]); //li.collection-item
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); //HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]


// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis); //HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
console.log(lis[0]); //li.collection-item
lis[1].style.color = 'blue';
lis[1].textContent = 'Hello World';

// // Convert HTML Collection into array
lis = Array.from(lis);
console.log(lis); //[li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
lis.reverse();

lis.forEach(function(li, index){
   console.log(li.className); //collection-item
   li.textContent = `${index}: Hello`;
 });
 console.log(lis); //[li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

// document.querySelectorAll
const allitems = document.querySelectorAll('ul.collection li.collection-item');

 allitems.forEach(function(item, index){
     item.textContent = `${index}: Hello`;
 });

 const liOdd = document.querySelectorAll('li:nth-child(odd)');
 const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items );
