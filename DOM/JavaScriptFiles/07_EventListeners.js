/*
Event Listener Syntax:
document.<...>.addEventListener(<actual event>,function(){})
 */
// Adding event to Clear Task Button
//Type 1: Using Anonymous function
//Comment any one type
//  document.querySelector('.clear-tasks').addEventListener('click', function(e){ // e -> event object
//    console.log('Hello World');
//    e.preventDefault();
//  });


//Type 2: Using function call
 document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
     //console.log('Clicked');
    e.preventDefault();
    //EVENT OBJECTS

    console.log(e.target) //<a class="clear-tasks btn black" href="">Clear Tasks</a>
    console.log(e.target.className); // clear-tasks btn black
    console.log(e.target.classList); /*
    0: "clear-tasks"
    1: "btn"
    2: "black"
     */
    e.target.innerText = "Click Here" //Changes to Click Here

    //Type of event
    console.log(e.type); //click
    // Timestamp
    console.log(e.timeStamp);
    // Coords event relative to the window
    console.log("Coords event relative to the window");
    console.log(`Y: ${e.clientY}`);
    console.log(`X: ${e.clientX}`);

    // Coordinates event relative to the element
    console.log("Coords event relative to the element");
    console.log(`Y: ${e.offsetY}`);
    console.log(`X: ${e.offsetX}`);    

 }


