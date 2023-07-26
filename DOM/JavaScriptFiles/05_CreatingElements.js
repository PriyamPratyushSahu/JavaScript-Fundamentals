// Create element
const newLi  = document.createElement('li');
console.log(newLi); //<li></li>

// Add class
newLi.className = 'collection-item';
console.log(newLi); //<li class ="collection-item"></li>

// Add id
newLi.id = 'new-item';
console.log(newLi); //<li class ="collection-item" id ="new-item"></li>

// Add attribute
newLi.setAttribute('title', 'New Item');
console.log(newLi); //<li class ="collection-item" id ="new-item" title = "New Item"></li>

// Create text node and append
//appendChild() -> To put inside of something
newLi.appendChild(document.createTextNode('Hello World'));
console.log(newLi); //<li class ="collection-item" id ="new-item" title = "New Item">Hello World</li>

//Append li as child to ul
document.querySelector('ul.collection').appendChild(newLi) //Added to the list

// Create new link element - To match with other list elements
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
newLi.appendChild(link); //The link added to new list 

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);