let listTitle = document.getElementById("title");
listTitle.style.backgroundColor = "blue";
listTitle.style.color = "yellow";

let addButton = document.getElementById("add");
let deleteFirstButton = document.getElementById("deleteFirst");
let deleteLastButton = document.getElementById("deleteLast");
let textInput = document.getElementById("textInput");
let list = document.getElementById("list");

addButton.addEventListener("click", function () {
  let inputValue = textInput.value.trim();
  list.appendChild(inputValue);
  textInput.value = "";
});

deleteFirstButton.addEventListener("click", function () {
  list.removeChild(list.firstChild);
});

deleteLastButton.addEventListener("click", function () {
  list.removeChild(list.lastChild);
});

// I would like you to create new HTML and js files
//add a text box and a button to the html file
//when you click on the button, it should create a div containing the text of text box.
