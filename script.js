var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === "" || inputValue== " ") {
    $("#emptyLiveToast").toast("show");
    return;
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  $("#liveToast").toast("show");

  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
