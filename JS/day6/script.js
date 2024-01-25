const data = document.getElementById("value");
const key = document.getElementById("key");
const save = document.getElementById("save");
const clear = document.getElementById("clear");

save.addEventListener("click", saveData);

function saveData() {
  localStorage.setItem(key.value, data.value);
}
