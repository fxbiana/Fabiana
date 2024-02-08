var i = prompt("Please a number 1-10", "0");
var msg = '<h2>Multiplication Table</h2>';
var i=1;
   while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
var el = document.getElementById('blackboard');
el.innerHTML = msg;

