const canvas=document.getElementById("drawingCanvas");
const context=document.getContext("2d");

let isdrawing=false;
canvas.addEventListener("mousedown",()=>isdrawing=true);
canvas.addEventListener("mouseup",()=>isdrawing=false);
canvas.addEventListener("mousemove",draw);

