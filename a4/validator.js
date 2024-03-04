function isValid() {
    if (firstName() && lastName() && email() && phoneNumber() && username() && password() && address() && city() && state() && country() && zipcode())
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

firstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstName==="null" || firstName==="" || firstName.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstName.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}
lastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;
    //2) read value from HTML
    var validLastname = document.getElementById("LastName").value;
    //3) Do validation
    if (lastName==="null" || lastName==="" || lastName.length >= 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstName.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
    //4) Send error message to HMTL
    errorMessages += "<p>Invalid phone number </p>";
    //5) return status of each field
    return (validFirstname && validLastname);
}
email.addEventListener('blur', email, false);
function email(){
    var validEmail=false;
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length || isNaN(userEmail) || userEmail==="") {
        errorMessages += "<p>Invalid email</p>";
    }
        else
            validEmail= true;
}
phonNumber.addEventListener('blur', phoneNumber, false);
function phoneNumber(){
    var phone = document.getElementById("Phone").value;
    if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
    errorMessages = "<p>Invalid phone number </p>";
        else
          return true; //Or assign the value to a variable. For example validPhone = true;
}
username.addEventListener('blur', username, false);
function username() {
    var validUsername=document.getElementById("Username");
    if (username==="null" || username==="" || username>=12) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("Username invalid — length")
    }
    else
        return true;
}
function password() {

}
function address() {

}
function city(){

}
function state(){
        return true;
}
function country() {
         return true;
}
function zipcode() {
    var zipcode= document.getElementById("ZipCode").value;
    var country = document.getElementById("country").value;
    if(country === "USA" && document.myForm.Zip.value.length != 5 ) {
            errorMessages+="Please provide a zip in the format #####.";
            document.myForm.Zip.focus() ;
            return false;
         }    
else
    validZipCode=true
} 
