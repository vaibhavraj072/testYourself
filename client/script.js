let questions = [];

const loadQuestions = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/questions");
    questions = await response.json();

    const questionContainer = document.getElementById("questions");
    questionContainer.innerHTML = "";

    questions.forEach((question, index) => {
      const questionHTML = `
        <div>
          <p>${index + 1}. ${question.text}</p>
          ${question.options
            .map(
              (option) => `
                <label>
                  <input type="radio" name="question${question._id}" value="${option}" />
                  ${option}
                </label>
              `
            )
            .join("")}
        </div>
      `;
      questionContainer.innerHTML += questionHTML;
    });
  } catch (error) {
    console.error("Error loading questions:", error.message);
  }
};

const submitTest = async () => {
  const answers = {};
  questions.forEach((question) => {
    const selectedOption = document.querySelector(
      `input[name="question${question._id}"]:checked`
    );
    if (selectedOption) {
      answers[question._id] = selectedOption.value;
    }
  });

  try {
    const response = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });
    const result = await response.json();
    alert(`You scored ${result.score} out of ${result.total}`);
  } catch (error) {
    console.error("Error submitting test:", error.message);
  }
};

loadQuestions();
