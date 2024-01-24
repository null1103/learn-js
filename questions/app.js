const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const plusBtn = question.querySelector(".plus-icon");
  const minusBtn = question.querySelector(".minus-icon");
  plusBtn.addEventListener("click", () => {
    question.classList.add("show-text");
  });
  minusBtn.addEventListener("click", () => {
    question.classList.remove("show-text");
  });
});
