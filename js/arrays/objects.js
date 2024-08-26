/*
============object====================
let cars={
  color:"red",
  model:"2000",
  cost:2000000 
}
console.log(cars.color)
console.log(cars["model"])

==================this.object==============
  
   let animal={
    name:"lion",
    age:20,
    gender:"male",
    display:function(){
    console.log(this.name+""+this.age+""+this.gender);

    }
   }
  // console.log(animal)
  // console.log(animal.name+""+animal.age+""+animal.gender)
   animal.display();
//   animal["display"]()
 
 =====object in object==================== 
 let student={
  name:"jon",
  age:21,
  work:{
    school:2,
    marsks:25
  }
 }
 console.log(student.work.school)

=================set and map============


let res= new set([]);
res.add("welcome")
res.add("come")
res.add("to")
res.add("india")
for (let i of res){
  console.log(i)
}



==================set method =================

let  finalres=new set();
finalres.add("fname");
finalres.add("lname");
finalres.add("add");

console.log(finalres)


================================map method
let  finalres1=new Map();
finalres1.set("1","john");
finalres1.set(2,"yose");
finalres1.set(true,"bool");

console.log(finalres1)
*/