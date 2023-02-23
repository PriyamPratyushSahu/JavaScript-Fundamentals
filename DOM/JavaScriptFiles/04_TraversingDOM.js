const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
console.log(list); //<ul class="collection">…</ul>
console.log(listItem); //<ul class="collection-item">…</ul>

// Get child nodes
console.log(list.childNodes); //NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]

console.log(list.childNodes[0]); //#text
console.log(list.childNodes[0].nodeName); //#text
console.log(list.childNodes[3].nodeType);// 1

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
console.log(list.children); //HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

console.log(list.children[1]); //<li class="collection-item">…</li>
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
console.log(list.children[3].children[0]);

// // First child
console.log(list.firstChild);
console.log(list.firstElementChild);

// // Last child
console.log(list.lastChild);
console.log(list.lastElementChild);

// // Count child elements
console.log(list.childElementCount); //5

// // Get parent node
console.log(listItem.parentNode);
console.log(listItem.parentElement);
console.log(listItem.parentElement.parentElement);

// // Get next sibling
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling.nextElementSibling.previousElementSibling);// Hello

 // Get prev sibling
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);
