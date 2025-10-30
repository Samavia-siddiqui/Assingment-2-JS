let car = document.getElementById("car");
let position = 0; 

function move(event) {
  
  if (event.key === "ArrowRight") {
    position += 10; 
    car.style.marginLeft = position + "px";
  }

  if (event.key === "ArrowLeft") {
    position -= 10; 
    if (position < 0) position = 0; 
    car.style.marginLeft = position + "px";
  }
}