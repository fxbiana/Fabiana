var mybutton = document.getElementById("clearButton");
mybutton.addEventListener("click", function(event) {
  var element = document.getElementsByClassName("dot");
  
  for (var index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
