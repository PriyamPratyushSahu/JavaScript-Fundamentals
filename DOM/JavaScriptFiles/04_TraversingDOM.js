const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
//List of items
console.log(list); //<ul class="collection">…</ul>
//Single Item
console.log(listItem); //<ul class="collection-item">…</ul>

// Get child nodes
//Node List count includes both text(as a line break) and each elements(items)
console.log(list.childNodes); //NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]

//(Text Node)
console.log(list.childNodes[0]); //#text
console.log(list.childNodes[0].nodeName); //#text
console.log(list.childNodes[0].nodeType);// 3

//(Element)
console.log(list.childNodes[1]); //#li.collection-item
console.log(list.childNodes[1].nodeName); //#LI
console.log(list.childNodes[1].nodeType);// 1

//Number specification of each node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes - This will exclude text and only provide the elements(items)(See the count)
//Prefer children over childNodes
console.log(list.children); //HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]

console.log(list.children[1]); //<li class="collection-item">…</li>
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link'; //Added an id 
console.log(list.children[3].children[0]);

// First child

//Gives the first element or node
console.log(list.firstChild); //#text
//Only Gives first element
console.log(list.firstElementChild); //li.collection-item

// // Last child
console.log(list.lastChild);
console.log(list.lastElementChild);

// // Count child elements
console.log(list.childElementCount); //5

// // Get parent node
console.log(listItem.parentNode); //Provides the ul,collections of list
console.log(listItem.parentElement); //Provides the ul,collections of list
console.log(listItem.parentElement.parentElement); //div tag

// // Get next sibling
//Note: listItem is at the first item

console.log(listItem.nextSibling); //text
console.log(listItem.nextElementSibling); //element(li)
console.log(listItem.nextElementSibling.nextElementSibling);
console.log(listItem.nextElementSibling.nextElementSibling.previousElementSibling);// element(li)

 // Get prev sibling
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling); //null, listItem is at the first place
