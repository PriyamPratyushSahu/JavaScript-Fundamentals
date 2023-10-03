console.log(document);
console.log(document.all);
/*
HTMLAllCollection(44) [html, script, head, meta, meta, meta, link, link, title, body, div.container, div.row, div.col.s12, div#main.card, div.card-content, span.card-title, div.row, form#task-form, div.input-field.col.s12, input#task, label, input.btn, div.card-action, h5#task-title, ul.collection, li.collection-item, */
console.log(document.all[0]); //html
console.log(document.all[2]); //head
console.log(document.all.length); //44

console.log(document.head); //<head> ...</head>
console.log(document.body); //<body> ...</body>
console.log(document.doctype); //<!DOCTYPE html>
console.log(document.domain); //127.0.0.1
console.log(document.URL); //http://127.0.0.1:5501/DOM/HTMLFiles/index.html
console.log(document.characterSet); //UTF-8
console.log(document.contentType); //text/html

console.log(document.forms);
/*
HTMLCollection [form#task-form, task-form: form#task-form]
0:form#task-form
task-form:form#task-form
length: 1
[[Prototype]]: HTMLCollection
 */
console.log(document.forms[0]); //form#task-form
console.log(document.forms[0].id); //task-form
console.log(document.forms[0].method); //get

console.log(document.forms[0].action); //http://127.0.0.1:5501/DOM/HTMLFiles/index.php
console.log(12121211);
console.log(document.links);
/*
HTMLCollection(6) [a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.delete-item.secondary-content, a.clear-tasks.btn.black]
0: a.delete-item.secondary-content
1: a.delete-item.secondary-content
2: a.delete-item.secondary-content
3: a.delete-item.secondary-content
4: a.delete-item.secondary-content
5: a.clear-tasks.btn.black
length: 6
[[Prototype]]: HTMLCollection
 */
console.log(document.links[0]); /*
 <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a > 
  */
console.log(document.links[0].id); //<a href = "#"> ... </a>
console.log(document.links[0].className); //delete-item secondary-content
console.log(document.links[0].classList[0]); //delete-item

console.log(document.images); //returns array

console.log(document.scripts); //returns array of scripts used in html
console.log(document.scripts[2].getAttribute('src')); //../JavaScriptFiles/01_DocumentObjects.js

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
console.log(script.getAttribute('src'));
});
 /*
 //1 https://code.jquery.com/jquery-3.2.1.js
01_DocumentObjects.js:80 
//2 https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js
01_DocumentObjects.js:80 
//3 ../JavaScriptFiles/01_DocumentObjects.js
  */