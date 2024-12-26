// Load Questions
async function loadQuestions() {
  const response = await fetch("/api/questions");
  const questions = await response.json();
  const form = document.getElementById("quizForm");

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Q${index + 1}: ${q.text}</strong></p>
      ${q.options
        .map(
          (option, i) =>
            `<label>
              <input type="radio" name="question-${q._id}" value="${option}" />
              ${option}
            </label><br/>`
        )
        .join("")}
    `;
    form.appendChild(div);
  });
}

// Submit Quiz
document.getElementById("submitQuiz").addEventListener("click", async () => {
  const responses = [];
  document.querySelectorAll("form input[type='radio']:checked").forEach((input) => {
    responses.push({ id: input.name.split("-")[1], answer: input.value });
  });

  const response = await fetch("/api/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ responses }),
  });

  const result = await response.json();
  document.getElementById("result").innerText = `Your Score: ${result.score}`;
});

loadQuestions();
