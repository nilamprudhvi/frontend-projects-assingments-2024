
var session =document.getElementById("session")
function myfunc(){
var d=new Date();
var hr=d.getHours();
var min=d.getMinutes();
var sec=d.getSeconds();

if(hr>12){
   (session.innerHTML="PM")&&(hr=hr-12)

}
else{
    session.innerHTML="AM"
}
document.getElementById("hr").innerHTML=hr
document.getElementById("min").innerHTML=min
document.getElementById("sec").innerHTML=sec
}
setInterval(myfunc, 1000);
