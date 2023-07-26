// document.getElementById()

console.log(document.getElementById('task-title')); //h5#task-title
const taskTitle = document.getElementById('task-title');
console.log(taskTitle); //h5#task-title.test

// Get things from the element
console.log(document.getElementById('task-title').id); //task-title
console.log(document.getElementById('task-title').className); //test
 
// // Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
console.log(document.querySelector('#task-title')); //h5#task-title.test
console.log(document.querySelector('.card-title'));//<span class="card-title">Task List</span>
console.log(document.querySelector('h5')); //h5#task-title.test

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
//  document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';