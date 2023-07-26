const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Comment all event to run one individual event
// Clear input
taskInput.value = '';

// 1. Submit
//use  e.preventDefault(); to see the output
form.addEventListener('submit', runEvent); //EVENT TYPE: submit

// 2. Keydown
taskInput.addEventListener('keydown', runEvent);
// 3. Keydown
taskInput.addEventListener('keyup', runEvent);
// 4. Keypress
taskInput.addEventListener('keypress', runEvent);
// 5. Focus
taskInput.addEventListener('focus', runEvent);
// 6. Blur
taskInput.addEventListener('blur', runEvent);
// 7.Cut
taskInput.addEventListener('cut', runEvent);
// // 8. Paste
taskInput.addEventListener('paste', runEvent);
// // 9. Input
taskInput.addEventListener('input', runEvent);
// // 10. Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  //e.preventDefault();
}