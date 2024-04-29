function action(){
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var mail=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    var firstNameError=document.getElementById("firstNameError");
     if(firstname.trim()===""){
        event.preventDefault();
        firstNameError.textContent="First Name cannot Empty";
       
    }
     else if(firstname.length < 4){
        event.preventDefault();
error.textContent="username should contain atleast 4 characters "

    }
    

    if(lastname.trim()===""){
        event.preventDefault();
        lastNameError.textContent="last Name cannot Empty";
       
    }
     else if(lastname.length < 4){
        event.preventDefault();
lastNameError.textContent="username should contain atleast 4 characters ";

    }
    

    

}