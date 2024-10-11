function displayWatch() {
  const current_date = new Date();
  const hours = current_date.getHours();
  const minutes = current_date.getMinutes();
  const seconds = current_date.getSeconds();

  fullWatch = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("watch").textContent = fullWatch;
}

setInterval(displayWatch, 1000);
displayWatch();
