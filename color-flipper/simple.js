const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnElement = document.getElementById("btn");
const colorElement = document.getElementById("color");

btnElement.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  colorElement.textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
});
