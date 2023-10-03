/*
1. Replacing elements in the DOM
2. Remove elements in the DOM
3. Manipulate classes and attributes
 */

// REPLACE ELEMENT
/*
To replace  <h5 id="task-title" class="test">Tasks</h5> to h2 tag
 */
//Steps

//Step 1 : Create Element(for h2)
const newHeading = document.createElement('h2');

//Step 2: Add id
newHeading.id = 'task-title';

//Step 3: New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Step 4: Get the old heading(h5 tag)
const oldHeading = document.getElementById('task-title');
//Note: To replace the child(h5 to h2) parent is required here the parent tag is : <div class="card-action">

//Step 5: Parent
const cardAction = document.querySelector('.card-action');

//Step 6: Replace the tag using parent
cardAction.replaceChild(newHeading, oldHeading);
/************************************************************* */ 

// REMOVE ELEMENT
/*
To remove the list elements 
 */
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Just to identify each list item

for (let i = 0; i < lis.length; i++)
lis[i].appendChild(document.createTextNode(`${i+1}`));


//Types of removing element
//Type 1: By using .remove() : Remove list item
lis[0].remove(); //List Item no 1 deleted

//Type 2: Remove child element
list.removeChild(lis[3]); //List Item no 4 deleted
/* ************************************************************* */
// CLASSES & ATTRIBUTES
/*
To edit the cross tag
 */
const firstListElement = document.querySelector('li:first-child');
console.log(firstListElement.textContent) //List Item 2
console.log(firstListElement.children[0]) //a.delete-item.secondary-content
const link = firstListElement.children[0];

// Classes
console.log(link.className); //delete-item secondary-content
console.log(link.classList); /*
0: "delete-item"
1: "secondary-content"
 */
console.log(link.classList.length); //2
console.log(link.classList[0]); // delete-item
link.classList.add('test');

console.log(link.classList[2]); //test
console.log(link.classList.length); //3
link.classList.remove('test');
console.log(link.classList.length); //3
console.log(link); /*
<a href="#" class="delete-item secondary-content">/<i class="fa fa-remove"></i></a> 
*/

// Attributes
console.log(link.getAttribute('href')); //#

//Change attribute value
link.setAttribute('href', 'http://google.com');

//To verify does it has href attribute 
console.log(link.hasAttribute('href')); //true
//Set Title
link.setAttribute('title', 'Google');
console.log(link);/*
<a href="http://google.com" class="delete-item secondary-content" title="Google"><i class="fa fa-remove"></i></a>
 */
//To verify does it has title attribute
 console.log(link.hasAttribute('title')); //true
link.removeAttribute('title');

console.log(link.hasAttribute('title')); //false

console.log(link);/*
<a href="http://google.com" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
 */