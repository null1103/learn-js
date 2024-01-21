const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnElement = document.getElementById("btn");
const colorElement = document.getElementById("color");

btnElement.addEventListener("click", function () {
  const randomColor = generateHex();
  colorElement.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function generateHex() {
  let hexString = "#";
  for (i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexString += hex[randomIndex];
  }
  return hexString;
}
