document.getElementById("FirstName").addEventListener('blur', validateFirstName, false);
document.getElementById("LastName").addEventListener('blur', validateLastName, false);
document.getElementById("Email").addEventListener('blur', validateEmail, false);
document.getElementById("Phone").addEventListener('blur', validatePhone, false);
document.getElementById("Username").addEventListener('blur', validateUsername, false);
document.getElementById("Password").addEventListener('blur', validatePassword, false);
document.getElementById("Address").addEventListener('blur', validateAddress, false);
document.getElementById("City").addEventListener('blur', validateCity, false);
document.getElementById("Country").addEventListener('change', validateCountry, false);
document.getElementById("ZipCode").addEventListener('blur', validateZipCode, false);

function isValid() {
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("zipcodeError").innerHTML = "";
    document.getElementById("commentsError").innerHTML = "";
    document.getElementById("submiterror").innerHTML = "";
    var valid = true;
    valid = valid && validateFirstName();
    valid = valid && validateLastName();
    valid = valid && validateEmail();
    valid = valid && validateUsername();
    valid = valid && validatePhone();
    valid = valid && validatePassword();
    valid = valid && validateAddress();
    valid = valid && validateCity();
    valid = valid && validateCountry();
    valid = valid && validateZipCode();



    if (!valid) {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
    }
    return valid;
}

function validateFirstName() {
    var validFirstname = false;
    var firstname = document.getElementById("FirstName").value.trim();
    var errorMessages = "";

    if (firstname === "") {
        errorMessages += "<p>First name is required.</p>";
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        errorMessages += "<p>Invalid characters in first name. Only alphabets are allowed.</p>";
    } else if (firstname.length > 20) {
        errorMessages += "<p>First name cannot exceed 20 characters.</p>";
    } else {
        validFirstname = true;
    }

    document.getElementById("fnameError").innerHTML = errorMessages;
    return validFirstname;
}

function validateLastName() {
    var validLastname = false;
    var lastname = document.getElementById("LastName").value.trim();
    var errorMessages = "";

    if (lastname === "") {
        errorMessages += "<p>Last name is required.</p>";
    } else if (!/^[a-zA-Z]+$/.test(lastname)) {
        errorMessages += "<p>Invalid characters in last name. Only alphabets are allowed.</p>";
    } else if (lastname.length > 50) {
        errorMessages += "<p>Last name cannot exceed 50 characters.</p>";
    } else {
        validLastname = true;
    }

    document.getElementById("lnameError").innerHTML = errorMessages;
    return validLastname;
}

function validateEmail() {
    var validEmail = false;
    var email = document.getElementById("Email").value.trim();
    var errorMessages = "";

    if (email === "") {
        errorMessages += "<p>Email is required.</p>";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages += "<p>Invalid email format.</p>";
    } else {
        validEmail = true;
    }

    document.getElementById("emailError").innerHTML = errorMessages;
    return validEmail;
}

function validatePhone() {
    var validPhone = false;
    var phone = document.getElementById("Phone").value.trim();
    var errorMessages = "";

    phone = phone.replace(/-/g, '');

    if (phone === "") {
        errorMessages += "<p>Phone number is required.</p>";
    } else if (!/^\d+$/.test(phone)) {
        errorMessages += "<p>Invalid phone number. Only numerical values allowed.</p>";
    } else if (phone.length > 15) {
        errorMessages += "<p>Phone number cannot exceed 15 digits.</p>";
    } else {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        validPhone = true;
    }

    document.getElementById("phoneError").innerHTML = errorMessages;
    document.getElementById("Phone").value = phone; 
    return validPhone;
}

function validateUsername() {
    var validUsername = false;
    var username = document.getElementById("Username").value.trim();
    var errorMessages = "";

    if (username === "") {
        errorMessages += "<p>Username is required.</p>";
    } else if (username.length > 12) {
        errorMessages += "<p>Username cannot exceed 12 characters.</p>";
    } else {
        validUsername = true;
    }

    document.getElementById("usernameError").innerHTML = errorMessages;
    return validUsername;
}

function validatePassword() {
    var validPassword = false;
    var password = document.getElementById("Password").value.trim();
    var errorMessages = "";

    if (password === "") {
        errorMessages += "<p>Password is required.</p>";
    } else if (password.length > 7) {
        errorMessages += "<p>Password cannot exceed 7 characters.</p>";
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(password)) {
        errorMessages += "<p>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>";
    } else {
        validPassword = true;
    }

    document.getElementById("passwordError").innerHTML = errorMessages;
    return validPassword;
}


function validateAddress() {
    var validAddress = false;
    var address = document.getElementById("Address").value.trim();
    var errorMessages = "";

    if (address === "") {
        errorMessages += "<p>Address is required.</p>";
    } else {
        validAddress = true;
    }

    document.getElementById("addressError").innerHTML = errorMessages;
    return validAddress;
}

function validateCity() {
    var validCity = false;
    var city = document.getElementById("City").value.trim();
    var errorMessages = "";

    if (city === "") {
        errorMessages += "<p>City is required.</p>";
    } else {
        validCity = true;
    }

    document.getElementById("cityError").innerHTML = errorMessages;
    return validCity;
}

function validateCountry() {
    var validCountry = false;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country === "") {
        errorMessages += "<p>Country is required.</p>";
    } else {
        validCountry = true;
    }

    document.getElementById("countryError").innerHTML = errorMessages;
    return validCountry;
}

function validateZipCode() {
    var validZipCode = true; 
    var zipCode = document.getElementById("ZipCode").value.trim();
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country === "USA") {
        if (zipCode === "") {
            errorMessages += "<p>Zip Code is required for USA.</p>";
            validZipCode = false;
        } else if (!/^\d{5}$/.test(zipCode)) {
            errorMessages += "<p>Invalid Zip Code format. Must be 5 digits.</p>";
            validZipCode = false;
        }
    }

    document.getElementById("zipcodeError").innerHTML = errorMessages;
    return validZipCode;
}
