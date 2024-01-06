let userNameTries = 0;
let passTries =0 ;
let confirmTries = 0;
let emailTries = 0;
let mobileTries = 0;

//StrongP@ssword123

const input = document.getElementsByClassName("signup");
console.log(input)

for(inp of input){
     inp.addEventListener("input", validateForm);
 
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
   // var regex = /^\+[0-9]{1,4}-?[0-9]{6,}$/;  
   var regex =/^\d{10,}$/;
    // Test the provided number against the regular expression
    return regex.test(number);
  }
 
function isValidPassword(password1) {
    // Password regex: At least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password1);
}


let password1;
let dob;
let nameValid, emailValid,confirmPassValid, mobileValid, dobValid;

function validateForm(e){
if(userNameTries >=3 || emailTries >=3 || passTries >=3 || confirmTries >=3 || mobileTries >=3) {

    const input = document.getElementsByClassName("signup");
    const spanInputs = document.getElementsByClassName("spanMsg");
    for(inp of input){
    inp.value = "";   
    inp.disabled = true;     
    }

    for(span of spanInputs){
       span.style.display = "none";
       
    }
    document.getElementById("errSpan").innerText = "Form Disabled.You are trying to enter too many characters!!!!"
    

}
    let user_Name = e.target.value;
    if(e.target.id==="userName"){
        if((user_Name.length<3)){
            e.target.style.border='2px solid red'
            userNameSpan.innerText="Minimum 3 Characters required!!"
            nameValid = false;
        }else if(!/^[a-zA-Z]/.test(user_Name)){
            e.target.style.border='2px solid red'
            userNameSpan.innerText="Username must start with a letter."
            nameValid = false;
        }else if(/^\d+$/.test(user_Name)){
            e.target.style.border='2px solid red'
            userNameSpan.innerText="Alphabets Required!!"
            nameValid = true;
        
        }else if(!/^[a-zA-Z0-9]+$/.test(user_Name)){
            e.target.style.border='2px solid red'
            userNameSpan.innerText= "Username must contain only letters and numbers."
            nameValid = true;
        
        }else if(user_Name.length>=40){
            e.target.value ="";
            userNameTries++;
        }      
        else{
            e.target.style.border='3px solid green'
            userNameSpan.innerText="";
            nameValid = true;
        }

    }

   
   let id = e.target.id;
    if(id==="email-id"){
     var email = e.target.value;
        if(email===""){
            e.target.style.border='2px solid red'
            
            emailSpan.innerText="Enter Your Email Id Here!"
            
        }else if(email.length>=40){
            e.target.value ="";
            emailTries++;
        }else if(!isValidEmail(email)){
            e.target.style.border='2px solid red'
            emailSpan.innerText="Please Enter a Valid Email Id Here!!"
            emailValid = false;
        }
        else{
            e.target.style.border='3px solid green'
            emailSpan.innerText="";
            emailValid = true;
            
        }

    }
  
    if(e.target.id==="password"){
        password1 = e.target.value;
        if(password1===""){
            e.target.style.border='2px solid red'
            passwordSpan.innerText="Enter a password Here!"
            
        }else if(password1.length>=40){
            e.target.value ="";
            passTries++;
        }
        // else if(!isValidPassword(password1)){
        //     e.target.style.border='2px solid red'
        //     passwordSpan.innerText="Invalid password. Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one digit.";

        // }
        
        else if(password1.length<8){
            passwordSpan.innerText="Minimum 8 Characters required!!!"
        }else if(!/[A-Z]/.test(password1)){
            passwordSpan.innerText="Should contain at least one uppercase letter!!!"
        }else if(!/[a-z]/.test(password1)){
            passwordSpan.innerText="Should contain at least one lowercase letter!!!"
        }else if(!/\d/.test(password1)){
            passwordSpan.innerText="Should contain at least one digit!!!"
        }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password1)){
            passwordSpan.innerText="Should contain at least one special character!!!"
        }
        
        else{
            e.target.style.border='3px solid green'
            passwordSpan.innerText="";
        }

    }

    if(e.target.id === "confirm-password"){
       const confirmPass= e.target.value;
        console.log(password1);
        console.log(confirmPass);

       if(password1 === confirmPass){
       console.log("Valid Password!!!!"); 
       e.target.style.border='3px solid green'
       confirmPassValid = true;
       }else{
        e.target.style.border='2px solid red'
        confirmPasswordSpan.innerText="Password do not Match!!!!"; 
        confirmPassValid =  false;
       }

    }
   

    if(e.target.id==="mobile"){
        var mobile = e.target.value;
        if(mobile===""){
            e.target.style.border='2px solid red'
            mobileSpan.innerText="Enter a mobile number Here!"
            
        }else if(! /^\d{10}$/.test(mobile)){
            e.target.style.border='2px solid red'
            mobileSpan.innerText="Invalid mobile Number!";
            mobileValid = false;
        }else if(!isValidMobileNumber(mobile)){
            e.target.style.border='2px solid red'
            mobileSpan.innerText="Enter a valid mobile number Here!";
            mobileValid = false;
        }
        else if(mobile.length >= 40){
            e.target.value = "";
            mobileTries++;

        }
        else{
            e.target.style.border='3px solid green'
            mobileSpan.innerText="";
            mobileValid = true;
        }

    }

    dob = e.target.value
    if(e.target.id==="date-of-birth"){
        console.log("dob: ",dob)
        if(!(dob)===""){
            e.target.style.border='2px solid red'
            dobSpan.innerText="Please Enter Date Of Birth";
            e.target.style.border='2px solid red'
            dobValid = false;
        }else if(!isValidDateOfBirth(dob)){
            e.target.style.border='2px solid red'
            dobSpan.innerText="Please Enter a Valid Date Of Birth"
            dobValid =false;
        }else{
            e.target.style.border='3px solid green'
            dobSpan.innerText="";
            dobValid = true;
        }

    }
}


document.getElementById("registrationForm").addEventListener("submit", submitForm)
function submitForm(e){
    if(nameValid && emailValid && confirmPassValid && mobileValid && dobValid){
        e.preventDefault();
       let successBox = document.querySelector(".success")
       successBox.style.display = "flex";
        console.log("Form Valid!!!")

    }else{
        e.preventDefault();
        
    }
}

function isValidDateOfBirth(dateOfBirth) {
   
    // Parse the date
    const dob = new Date(dateOfBirth);
    console.log("Date of Birth",dob)
    

    // Check if the date is not in the future
    const currentDate = new Date();
    console.log("currentDate",currentDate)
    if (dob > currentDate) {
        return false;
    }else{
       return true
    }

}

function togglePasswordVisibility(){
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("toggle-icon");
    if(passwordInput.type==="password"){
        passwordInput.type="text";
        toggleIcon.src='./images/invisible.png';
    }else if(passwordInput.type==="text"){
        passwordInput.type="password";
        toggleIcon.src='./images/visible.png';
    }
}