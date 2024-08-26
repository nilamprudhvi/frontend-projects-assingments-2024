
function validateForm(){ 

    if (document.myForm.uname.value =="") 
     {
         
         document.getElementById('error').innerHTML ="Error! Please Enter Valid Username.";
            return false;
       }
    
    if(document.myForm.email.value =="")
        {
            document.getElementById("error2").innerHTML = "Error! Please Enter Valid Email.";
       return false;
        }
    
    
    if(document.myForm.password.value =="")
    {
           document.getElementById("error1").innerHTML = "Error! Please Create Valid Password.";
    return false;
    }
}    