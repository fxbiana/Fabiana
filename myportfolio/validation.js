function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    
    if (name.trim() == '' || email.trim() == '' || comment.trim() == '') {
        alert('Please fill in all fields.');
        return false; 
    }
    return true;
}
