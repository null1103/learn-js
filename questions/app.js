const questions = document.querySelectorAll(".question");
questions.forEach(question => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach(q => {
        if(q!==question) {
            q.classList.remove("show-text");
        }
    });
    question.classList.toggle("show-text");
  });
});
