const questions = document.querySelectorAll("#question-box");
questions.forEach(function (question) {
  const btn = question.querySelector("#question-head");
  btn.addEventListener("click", function () {
    questions.forEach(function (present) {
      if (present !== question) {
        present.classList.remove("active");
      }
    });
    question.classList.toggle("active");
  });
});
