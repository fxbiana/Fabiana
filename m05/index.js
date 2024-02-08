let i = prompt("Please a number 1-10", "0");
var msg = '<h2>Multiplication Table</h2>';
if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
   while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;
