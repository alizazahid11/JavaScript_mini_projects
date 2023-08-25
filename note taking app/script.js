const noteinput=document.getElementById("noteInput");
const addNoteButton=document.getElementById("addNoteButton");
const noteList=document.getElementById("noteList");
function addnote(){
  const notetext=noteinput.ariaValueMax.trim();//trim use todelete any white spaces
  if(notetext){
    noteList.innerHTML+=`<li>${notetext}<button>Delete</button></li>`;
noteinput.value="";  
}  
}