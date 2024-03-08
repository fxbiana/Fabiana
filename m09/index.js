document.addEventListener("DOMContentLoaded", function() {
  var clearButton = document.getElementById("clearButton");

  clearButton.addEventListener("click", function(event) {
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot) {
      dot.parentNode.removeChild(dot);
    });

    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;

    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.background = color;
    dot.style.left = (event.pageX - size / 2) + "px";
    dot.style.top = (event.pageY - size / 2) + "px";

    document.body.appendChild(dot);
  });
});

var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });
