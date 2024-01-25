function time() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();

  console.log(currentDateTime);

  document.querySelector("#clock").textContent = currentDateTime;
}
setInterval(time, 1000);
