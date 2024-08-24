 

const toggle1=document.getElementById("toggleswitch");
const container1=document.querySelector(".container");


toggle1.addEventListener("click",function(){
    toggle1.classList.toggle("switchchange");


    
    if (toggle1.classList.contains("switchchange")){

        container1.style.backgroundColor="red"

    }
        else{
            container1.style.backgroundColor="white"
        }
   
})

