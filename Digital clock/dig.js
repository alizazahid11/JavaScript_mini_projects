function updatetime(){
    const time=document.getElementById("time");
    const date=new Date();
    time.textContent=date.toLocaleTimeString();//text content useto transform the html elements
}//localetimestring use to current time into a string
setInterval(updatetime,1000);
updatetime();