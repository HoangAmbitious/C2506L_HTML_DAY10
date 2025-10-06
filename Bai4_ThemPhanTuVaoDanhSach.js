function themItem() {
  // Tạo 1 thẻ li mới
  let li = document.createElement("li");
  li.textContent = "Item mới";

  // Thêm vào danh sách
  document.getElementById("danhsach").appendChild(li);
}