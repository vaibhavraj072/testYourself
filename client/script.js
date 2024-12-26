async function fetchQuestions() {
    const res = await fetch('/api/questions');
    const questions = await res.json();
  
    const container = document.getElementById('questionsContainer');
    container.innerHTML = questions
      .map(
        (q, i) => `
          <div>
            <p>${i + 1}. ${q.question}</p>
            ${q.options
              .map(
                (opt) =>
                  `<label><input type="radio" name="q${i}" value="${opt}" required> ${opt}</label>`
              )
              .join('')}
          </div>
        `
      )
      .join('');
  }
  
  function submitQuiz() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const result = document.getElementById('result');
    result.innerHTML = `You answered ${answers.length} questions.`;
  }
  
  fetchQuestions();
  