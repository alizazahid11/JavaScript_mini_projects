function cleardisplay(){
const display=document.getElementById("display");
display.value="";
}
function addtodisplay(value){
    const display=document.getElementById("display");
    display.value+=value;
    console.log("Value added:", value);

}
function tocalculate(){
    const display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }catch{
        display.value="error"
    }
}
function todel(){
    const display=document.getElementById("display");
    display.value= display.value.slice(0, -1);
}
