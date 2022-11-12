let image = document.getElementById("image");
let allIcon = document.querySelectorAll(".icons img");
let container = document.querySelector(".container");
for (const img of allIcon) {
  img.addEventListener("click", function () {
    changePhone(this.getAttribute("src"));
    changeColor(this.getAttribute("color"));
  });
}
function changePhone(phone) {
  image.setAttribute("src", `${phone}`);
}
function changeColor(color) {
  container.style.backgroundColor = color;
}
