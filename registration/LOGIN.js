function save_info()
{

if(document.myForm.EMAIL.value =="")
{
      var x = document.getElementById("error")
       x.innerHTML = "Error! Please Enter Valid Email.";
       return false;
}


if(document.myForm.PASSWORD.value =="")
{
 document.getElementById("error1").innerHTML = "Error! Please Enter Valid Password.";
 return false;
}

}