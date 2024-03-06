function isValid() {
    if (firstName() && lastName() && getEmail() && phoneNumber() && userName() && getPassword() && getAddress() && getCity() && getzipCode()) {
        return true;
    }
    else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;  
    }

}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;
    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages="";
    //3) Do validation
     if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
            errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
            console.log("Last name invalid — length")
            } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
                errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
                console.log("last name invalid — bad characters")
            } else {
                    validFirstname = true;
                    console.log("Last name valid")
            };
    //4) Send error message to HMTL
    document.getElementById("lname").innerHTML = errorMessages;
    //5) return status of each field
    return (validLastname);
}

Email.addEventListener('blur', getEmail, false);
function getEmail(){
    //1) Create variable
    var validEmail=false;
    //2) read value from HTML
    var email = document.getElementById("Email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var errorMessages="";
    //3) Do validation
     if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
            errorMessages += "<p>Invalid email</p>";
            console.log("Invalid email")
            } 
        else {
            validEmail = true;
            console.log("Email valid")
            };
    //4) Send error message to HMTL
    document.getElementById("emailError").innerHTML = errorMessages;
    //5) return status of each field
    return (validEmail);
}

Phone.addEventListener('blur', phoneNumber, false);
function phoneNumber(){
    //1) Create variable
    var validPhonenumber=false;
    //2) read value from HTML
    var phonenumber=document.getElementById("Phone").value;
    var errorMessages="";
    //3) Do validation
    if (isNaN(phonenumber) || phonenumber.length >15 || phonenumber===null || phonenumber==="") {
          errorMessages += "<p>Invalid phone number </p>";
            console.log("Phone number invalid")  
    }
    else {
        validPhonenumber = true; 
        console.log("Phone number valid")
    };
    //4) Send error message to HMTL
    document.getElementById("phoneError").innerHTML = errorMessages;
    //5) return status of each field
    return (validPhonenumber);
}

Username.addEventListener('blur', userName, false);
function userName(){
    //1) Create variable
    var validUsername=false;
    //2) read value from HTML
    var username=document.getElementById("Username").value;
    var errorMessages="";
    //3) Do validation
    if (username.length >11 || username===null || username==="") {
          errorMessages += "<p>The username is required and must be less than 12 characters </p>";
            console.log("Username invalid")  
    }
    else {
        validUsername = true; 
        console.log("Username valid")
    };
    //4) Send error message to HMTL
    document.getElementById("usernameError").innerHTML = errorMessages;
    //5) return status of each field
    return (validUsername);
}

Password.addEventListener('blur', getPassword, false);
function getPassword(){
    //1) Create variable
    var validPassword=false;
    //2) read value from HTML
    var password=document.getElementById("Password").value;
    var errorMessages="";
    //3) Do validation
    if (password.length >6 || password===null || password==="") {
          errorMessages += "<p>The password is required and must be less than 7 characters </p>";
            console.log("Password invalid")  
    }
    else {
        validPassword = true; 
        console.log("Password valid")
    };
    //4) Send error message to HMTL
    document.getElementById("passwordError").innerHTML = errorMessages;
    //5) return status of each field
    return (validPassword);
}

Address.addEventListener('blur', getAddress, false);
function getAddress(){
    //1) Create variable
    var validAddress=false;
    //2) read value from HTML
    var address=document.getElementById("Address").value;
    var errorMessages="";
    //3) Do validation
    if (address===null || address==="") {
          errorMessages += "<p>The address is required</p>";
            console.log("Address invalid")  
    }
    else {
        validAddress = true; 
        console.log("Address valid")
    };
    //4) Send error message to HMTL
    document.getElementById("addressError").innerHTML = errorMessages;
    //5) return status of each field
    return (validAddress);
}

City.addEventListener('blur', getCity, false);
function getCity(){
    //1) Create variable
    var validCity=false;
    //2) read value from HTML
    var city=document.getElementById("City").value;
    var errorMessages="";
    //3) Do validation
    if (city===null || city==="") {
          errorMessages += "<p>The city is required</p>";
            console.log("City invalid")  
    }
    else {
        validCity = true; 
        console.log("City valid")
    };
    //4) Send error message to HMTL
    document.getElementById("cityError").innerHTML = errorMessages;
    //5) return status of each field
    return (validCity);
}

ZipCode.addEventListener('blur', getzipCode, false);
function getzipCode(){
    //1) Create variable
    var validZip=false;
    //2) read value from HTML
    var zipcode=document.getElementById("Country").value;
    var errorMessages="";
    //3) Do validation
    if (Country==="USA") {
          errorMessages += "<p>The zipcode is required</p>";
            console.log("Zipcode invalid")  
    }
    else {
        validZip = true; 
        console.log("Zipcode valid")
    };
    //4) Send error message to HMTL
    document.getElementById("zipcodeError").innerHTML = errorMessages;
    //5) return status of each field
    return (validZip);
}
