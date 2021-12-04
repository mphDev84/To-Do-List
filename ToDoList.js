var key = document.getElementById("textin");
key.addEventListener("keyup", function(e) {
  if (e.key===13) {
   e.preventDefault();
   document.getElementById("button").click();
  }
});

function addTask() {
  var li = document.createElement("li");
  li.id ="newTask";
  var inputVal = document.getElementById("textin").value;
  var t = document.createTextNode(inputVal);
  li.appendChild(t);
  if (inputVal === '') {
    alert("Write a task first!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("textin").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode('\u00D7');//\u00D7
  span.className = "close";
  span.id="deleteButton";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var myNodelist = document.getElementsByTagName("LI");
    for (const i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

