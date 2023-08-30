const canvas=document.getElementById("drawingCanvas");
const context=canvas.getContext("2d");

let isdrawing=false;
canvas.addEventListener("mousedown",()=>isdrawing=true);
canvas.addEventListener("mouseup",()=>isdrawing=false);
canvas.addEventListener("mousemove",draw);

function draw(e){
    if(!isdrawing)  return;
context.lineWidth=5;// Brush size
context.lineCap="round";//Rounded line endings
context.strokeStyle="black";//brush color

   context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
   context.stroke();//draws the line
context.beginPath();// Start a new path for the next line segment
context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
}

