let counter = 0;
const colors = ["#e60000", "#000", "#008000"];
const btns = document.querySelectorAll(".btn");
const textElement = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = e.currentTarget.id;
    if (id === "decrease") {
      counter--;
    } else if (id === "increase") {
      counter++;
    } else {
      counter = 0;
    }
    if (counter < 0) {
      textElement.style.color = colors[0];
    } else if (counter > 0) {
      textElement.style.color = colors[2];
    } else {
      textElement.style.color = colors[1];
    }
    textElement.textContent = counter;
  });
});
