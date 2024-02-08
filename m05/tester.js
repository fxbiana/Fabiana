var i = prompt("Please a number 1-10", "0");
var msg = '<h2>Multiplication Table</h2>';
var j=1;
   while (j < 11) {
    msg += j + ' * ' + i + ' = ' + (i * j) + '<br />';
    j++;
  }
var el = document.getElementById('blackboard');
el.innerHTML = msg;

