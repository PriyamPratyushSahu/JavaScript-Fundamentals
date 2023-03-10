const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('.h5');

//Click on CLEAR TASKS button
//Comment all event to run one individual event
// 1. Click
clearBtn.addEventListener('click', runEvent); //EVENT TYPE: click
// 2. Doubleclick
clearBtn.addEventListener('dblclick', runEvent); //EVENT TYPE: dblclick
// 3. Mousedown -click and hold
clearBtn.addEventListener('mousedown', runEvent); //EVENT TYPE: mousedown
// 4. Mouseup - click and let go
clearBtn.addEventListener('mouseup', runEvent);
// 5. Mouseenter - when you move the mouse from outside to inside the card
card.addEventListener('mouseenter', runEvent);
// 6. Mouseleave - when you move the mouse from inside to outside the card
card.addEventListener('mouseleave', runEvent);
// 7. Mouseover - when you move the mouse over the card
card.addEventListener('mouseover', runEvent);
// 8. Mouseout - when you move the mouse over the card
card.addEventListener('mouseout', runEvent);
// 9. Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();
}

//   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }