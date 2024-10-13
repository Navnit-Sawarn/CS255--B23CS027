const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag", "Ge"],
    answer: "Au",
  },
  {
    question: "What is the capital of France?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H₂O", "CO₂", "NaCl", "O₂"],
    answer: "H₂O",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "J.K. Rowling",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    options: ["Brain", "Liver", "Heart", "Kidney"],
    answer: "Heart",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: "Diamond",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Nitrogen",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage",
  },
  {
    question:
      "What is the process of converting solid directly into gas called?",
    options: ["Condensation", "Sublimation", "Evaporation", "Deposition"],
    answer: "Sublimation",
  },
  {
    question: "Which country is famous for inventing the game of chess?",
    options: ["China", "India", "Russia", "Egypt"],
    answer: "India",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

displayQuestion();
