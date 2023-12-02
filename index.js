const input = document.getElementsByClassName("signup");
console.log(input)

for(inp of input){
    inp.addEventListener("blur", validateForm);
}

function isValidName(value) {
    const pattern = /^[a-zA-Z]{3,}$/;
    return pattern.test(value);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobileNumber(number) {
    // Define a regular expression for a generic international mobile number
    var regex = /^\+[0-9]{1,4}-?[0-9]{6,}$/;  
    // Test the provided number against the regular expression
    return regex.test(number);
  }
 
function isValidPassword(password1) {
    // Password regex: At least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password1);
}

function validateForm(e){
    if(e.target.id==="userName"){
        if(!isValidName(e.target.value)){
            userNameSpan.innerText="Minimum 3 Characters required!!"
        }else{
            userNameSpan.innerText="";
        }

    }
   
    if(e.target.id==="email-id"){
     var email = e.target.value;
        if(email===""){
            emailSpan.innerText="Enter Your Email Id Here!"
            
        }else if(!isValidEmail(email)){
            emailSpan.innerText="Please Enter a Valid Email Id Here!!"
        }
        else{
            emailSpan.innerText="";
        }

    }
    
    if(e.target.id==="password"){
        var password1 = e.target.value;
        if(password1===""){
            passwordSpan.innerText="Enter a password Here!"
            
        }
        else if(!isValidPassword(password1)){
            passwordSpan.innerText="Invalid password. Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit.";
        }else{
            passwordSpan.innerText="";
        }

    }

    if(e.target.id === "confirm-password"){
       const confirmPass= e.target.value;
        console.log(password1);
        console.log(confirmPass);

       if(password1 === confirmPass){
        confirmPasswordSpan.innerText="Valid Password!!!!"; 
       }else{
        confirmPasswordSpan.innerText="Password do not Match!!!!"; 
       }

    }
   

    if(e.target.id==="mobile"){
        var mobile = e.target.value;
        if(mobile===""){
            passwordSpan.innerText="Enter a password Here!"
            
        }
        else if(!isValidPassword(mobile)){
            passwordSpan.innerText="Invalid password. Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit.";
        }else{
            passwordSpan.innerText="";
        }

    }


    if(e.target.id==="date-of-birth"){
        if(!(e.target.value)===""){
            dobSpan.innerText="Please Enter Date Of Birth";
        }

    }
}