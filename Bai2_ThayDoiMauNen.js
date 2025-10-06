const box = document.getElementById("box");
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const yellowBtn = document.getElementById("yellowBtn");

redBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

yellowBtn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});