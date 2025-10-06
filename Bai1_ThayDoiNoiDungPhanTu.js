const btn = document.getElementById("changeContentBtn");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
  content.textContent = "Chào bạn đến với JavaScript DOM";
});