var table = prompt("Give me a number 0-10");
var answer = parseInt(table); // Convert input to number

var msg = 'Multiplication Table'; // Message

// Do multiplication
for (var i = 1; i <= 10; i++) {
    msg += i + ' x ' + answer + " = " + (i * answer) + '<br />';
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
