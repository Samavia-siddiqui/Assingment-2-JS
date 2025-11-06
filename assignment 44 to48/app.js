//------CHAPTER 43-48------

//  Task 1
// Show an alert box on click on a link.
function greet() {
    alert('Hello User');
}

//  Task 2
// Display some Mobile images in browser. On click on an image, show a message in alert.
function thanks() {
    alert('Thanks for purchasing a phone from us');
}

//  Task 3
// Display 10 student records in a table; each row should contain a delete button. 
// Clicking the button deletes the entire row.

function removeRow(element) {
    element.parentNode.parentNode.remove();
}

//  Task 4
// Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
// (Handled via HTML with onmouseover/onmouseout events.)

// Example (in HTML):
// <img src="img1.jpg" onmouseover="this.src='img2.jpg'" onmouseout="this.src='img1.jpg'">

//  Task 5
// Show a counter in browser. Counter increases/decreases via buttons and updates in real-time.

function increase() {
    let value = document.getElementById("counter").innerHTML;
    value = parseInt(value);
    value += 1;
    document.getElementById("counter").innerHTML = value;
}

function decrease() {
    let value = document.getElementById("counter").innerHTML;
    value = parseInt(value);
    value -= 1;
    document.getElementById("counter").innerHTML = value;
}
