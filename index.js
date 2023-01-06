document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function dochange(){
  alert('clicked button with JS function');
}

function changecolor(){
  var dd1 = document.getElementById("id1");
  var dd2 = document.getElementById("id2");
  dd1.className = "blueback";
  dd2.className = "yellowback";
}

function changetext(){
  var dd1 = document.getElementById("id1");
  var dd2 = document.getElementById("id2");
  dd1.innerHTML = "bJR";
  dd2.innerHTML = "yO";
}

var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {

}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

function doGray() {
  if ( imageIsLoaded(grayImage) ) {     // check if image is loaded
    filterGray();	                      // function performs the grayscale work
    grayImage.drawTo(canvas);	          // display image
  }
}
