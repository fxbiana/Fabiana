let table = prompt("Give me a number 0-10");
var answer = table;             // Unit of table
var i = 1;                 // Set counter to 1
var msg = 'Multiplication Table';              // Message

  // Do addition
for (var i=1; i<=10; i++) {
    msg+= i + ' x ' + answer + " = " + (i*answer) + '<br />';
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
