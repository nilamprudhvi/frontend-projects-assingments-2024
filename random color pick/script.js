 let colorbox=document.getElementById("colorbox1");
 let buttoncolor1=document.getElementById("buttoncolor");
 let colorcode=document.getElementById("colorcode");

 

 function getrandomcolor(){
 const letters='0123456789ABCDEF';
 let colors='#';
 
    for( let i=0;i<6;i++){
    colors=colors+letters[Math.floor(Math.random()*16)];
     }
 return colors;
 }

 buttoncolor1.addEventListener("click",function(){

    const newcolor=getrandomcolor();
    colorbox.style.backgroundColor=newcolor;
    colorcode.textContent=newcolor;

 })
