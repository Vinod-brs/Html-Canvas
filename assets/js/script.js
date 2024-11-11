/* Getting DOM Elements */
const canvas = document.getElementById("draw");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const ctx = canvas.getContext("2d"); // 2 prams - context type and context attributes

// Default theme
let chathams_blue = "#1A4B84";
let drawColor = "#ff0000";




// Apply some properties to ctx
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;





// Init
let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(e) {
  if (!isDrawing) return; // Check for mouse click
 
  ctx.strokeStyle = drawColor;

  ctx.beginPath(); //Begin a new path

  // Start drawing the line
  ctx.moveTo(lastX, lastY);
  console.log(`LAST X - ${lastX}`);
  console.log(`LAST Y - ${lastY}`);

  // Go to current mouse location
  ctx.lineTo(e.offsetX, e.offsetY);


  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}

// Event Listeners
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //Mouse cursor's coordinates
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));



//Getting User Selected Color
document.getElementById("colorPicker").addEventListener("input", function(event) {
  let selectedColor = event.target.value;  // Get the selected color in hex format
  document.getElementById("colorValue").textContent = selectedColor; // Display the selected color Code
 
  // document.getElementById("mycol").style.backgroundColor = selectedColor; // Display the selected color 

  drawColor = selectedColor; //  selected color to Cursor color 
});

// Line Thickness
document.getElementById("Thickness").addEventListener("input", function(range){
  ctx.lineWidth = range.target.value;
  document.getElementById("SThickness").innerHTML = range.target.value;

})
// Event Listeners end

// Set theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
// Saving Previous Theme
setTheme(localStorage.getItem("movie-theme") || chathams_blue);


