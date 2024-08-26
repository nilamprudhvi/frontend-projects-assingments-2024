
let inputloc =document.getElementById("enteredlocation")
let  btn =document.getElementById("btn")
//let icon =document.getElementById("image")

const APIkey ="29ddb881b1fd3e864b7e98a1d97b6a53"
btn.onclick=function(){
if(inputloc.value=="")
    alert("enter location")
   else{
    loc1 = inputloc.value
   const url= `https://api.openweathermap.org/data/2.5/weather?q=${loc1}&appid=${APIkey}`

fetch(url).then(res=>res.json())
.then(data=>{
    
console.log(data)
   //
   let loc1 = document.getElementById("loc");
   const{name}=data
   loc1.innerHTML = name;
   //
   const k=273
   let temp1 = document.getElementById("unit");
   temp1.innerHTML= Math.floor(data.main.temp-k)+"C";
  
   
   //
   
   let weather1= document.getElementById("weather");

   weather1.innerHTML='(data.weather[0].description)';
   //

})
.catch(()=>{
    alert("enter valid location")
})
    inputloc.value=""

   }
}
