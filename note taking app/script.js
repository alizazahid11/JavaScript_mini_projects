const noteinput=document.getElementById("noteInput");
const addNoteButton=document.getElementById("addNoteButton");
const noteList=document.getElementById("noteList");
function addnote(){
  const notetext=noteinput.value.trim();//trim use todelete any white spaces
  if(notetext){
    noteList.innerHTML+=`<li>${notetext}<button>Delete</button></li>`;
noteinput.value="";  
}  
}
noteList.addEventListener("click" ,event=>{
    if(event.target.tagName==="BUTTON"){
        event.target.parentElement.remove();
    }
})
