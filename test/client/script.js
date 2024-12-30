document.getElementById("startTestBtn").addEventListener("click", function () {
  const selectedClass = document.getElementById("classSelect").value;
  const selectedSubject = document.getElementById("subjectSelect").value;
  const selectedChapter = document.getElementById("chapterSelect").value;

  if (!selectedClass || !selectedSubject || !selectedChapter) {
    alert("Please select class, subject, and chapter to start the test.");
    return;
  }

  fetchQuestions(selectedClass, selectedSubject, selectedChapter);
});

function fetchQuestions(selectedClass, selectedSubject, selectedChapter) {
  fetch(
    `http://localhost:5000/api/questions/${selectedClass}/${selectedSubject}/${selectedChapter}`
  )
    .then((response) => response.json())
    .then((questions) => {
      const questionContainer = document.getElementById("questionContainer");
      const submitBtn = document.getElementById("submitBtn");
      questionContainer.innerHTML = "";
      submitBtn.style.display = "block";

      questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          ${q.options
            .map(
              (opt) =>
                `<label><input type="radio" name="q${index}" value="${opt}">${opt}</label>`
            )
            .join("<br>")}
        `;
        questionContainer.appendChild(questionDiv);
      });

      submitBtn.addEventListener("click", function () {
        handleSubmit(questions);
      });
    })
    .catch((error) => console.error("Error fetching questions:", error));
}

function handleSubmit(questions) {
  const userAnswers = [];
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    userAnswers.push({
      question: q.question,
      selectedAnswer: selectedOption ? selectedOption.value : null,
      correctAnswer: q.answer,
    });
  });

  fetch("http://localhost:5000/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userAnswers }),
  })
    .then((response) => response.json())
    .then((result) => {
      displayResult(result);
    })
    .catch((error) => console.error("Error submitting answers:", error));
}

function displayResult(result) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `
    <h2>Result</h2>
    <p>Score: ${result.score} / ${result.totalQuestions}</p>
    <p>Correct Answers: ${result.correctAnswers}</p>
    <p>Wrong Answers: ${result.wrongAnswers}</p>
  `;
}
