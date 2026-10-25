const QUESTION_BANK = [
  // General & World Trivia (Preserved & enhanced from original)
  {
    category: "general",
    categoryLabel: "World Trivia",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct_answer: "Paris",
    explanation: "Paris has been the capital of France since 987 CE and is its most populous city."
  },
  {
    category: "science",
    categoryLabel: "Space & Science",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct_answer: "Mars",
    explanation: "Iron oxide (rust) prevalent on Mars's surface gives it a distinct reddish appearance."
  },
  {
    category: "science",
    categoryLabel: "Space & Science",
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Orca"],
    correct_answer: "Blue Whale",
    explanation: "Blue whales can reach lengths of up to 100 feet and weigh nearly 200 tons."
  },
  // Computer Science & Tech
  {
    category: "tech",
    categoryLabel: "Computer Science",
    question: "Which data structure operates on a First-In, First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Binary Search Tree", "Max Heap"],
    correct_answer: "Queue",
    explanation: "A Queue processes elements in the exact order they arrive (FIFO), whereas a Stack uses LIFO."
  },
  {
    category: "tech",
    categoryLabel: "Web Development",
    question: "Which HTTP status code indicates that a resource was 'Not Found' on the server?",
    options: ["200 OK", "301 Moved Permanently", "403 Forbidden", "404 Not Found"],
    correct_answer: "404 Not Found",
    explanation: "HTTP 404 indicates the server is reachable but could not find the requested resource path."
  },
  {
    category: "tech",
    categoryLabel: "Computer Science",
    question: "What is the worst-case time complexity of binary search on a sorted array of size n?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct_answer: "O(log n)",
    explanation: "Binary search halves the search space on every comparison, yielding logarithmic O(log n) time."
  },
  {
    category: "tech",
    categoryLabel: "Web Development",
    question: "In JavaScript, which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "Object.fromJSON()"],
    correct_answer: "JSON.parse()",
    explanation: "JSON.parse() deserializes a JSON string into an object, while JSON.stringify() does the reverse."
  },
  {
    category: "tech",
    categoryLabel: "Computer Science",
    question: "Which layer of the OSI model is primarily responsible for IP addressing and routing?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
    correct_answer: "Network Layer",
    explanation: "Layer 3 (Network Layer) handles packet forwarding and logical addressing via IP."
  },
  {
    category: "tech",
    categoryLabel: "Web Development",
    question: "Which CSS property is used inside a flex container to align items along the main axis?",
    options: ["align-items", "justify-content", "flex-wrap", "place-content"],
    correct_answer: "justify-content",
    explanation: "justify-content controls distribution along the main axis; align-items controls the cross axis."
  },
  {
    category: "tech",
    categoryLabel: "Computer Science",
    question: "In Git, which command creates a new branch and switches to it immediately?",
    options: ["git branch -d", "git switch -c", "git commit -am", "git merge --squash"],
    correct_answer: "git switch -c",
    explanation: "'git switch -c <branch>' (or 'git checkout -b <branch>') creates and checks out a new branch."
  },
  // Additional Science & Space
  {
    category: "science",
    categoryLabel: "Space & Science",
    question: "What is the chemical symbol for Gold on the periodic table?",
    options: ["Gd", "Ag", "Au", "Go"],
    correct_answer: "Au",
    explanation: "Au comes from the Latin word for gold, 'aurum', meaning shining dawn."
  },
  {
    category: "science",
    categoryLabel: "Space & Science",
    question: "Which organelle is commonly referred to as the powerhouse of the eukaryotic cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
    correct_answer: "Mitochondria",
    explanation: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP) for energy."
  },
  {
    category: "science",
    categoryLabel: "Space & Science",
    question: "Approximately how long does it take for light from the Sun to reach Earth?",
    options: ["8 seconds", "8 minutes and 20 seconds", "42 minutes", "2.5 hours"],
    correct_answer: "8 minutes and 20 seconds",
    explanation: "Traveling at ~300,000 km/s across 149.6 million km, sunlight takes roughly 500 seconds to arrive."
  },
  // Additional General Trivia
  {
    category: "general",
    categoryLabel: "World Trivia",
    question: "Which ocean is the largest and deepest on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct_answer: "Pacific Ocean",
    explanation: "The Pacific Ocean covers more than 30% of the Earth's surface and houses the Mariana Trench."
  },
  {
    category: "general",
    categoryLabel: "World Trivia",
    question: "Who painted the famous ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
    correct_answer: "Michelangelo",
    explanation: "Michelangelo painted the Sistine Chapel ceiling between 1508 and 1512."
  }
];

const TIME_PER_QUESTION = 15;
const OPTION_LETTERS = ["A", "B", "C", "D"];

// DOM Elements
const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const categorySelect = document.getElementById("category-select");
const startQCount = document.getElementById("start-q-count");
const startBtn = document.getElementById("start-btn");

const questionCategoryEl = document.getElementById("question-category");
const timerPillEl = document.getElementById("timer-pill");
const timerTextEl = document.getElementById("timer-text");
const questionCounterEl = document.getElementById("question-counter");
const liveScoreEl = document.getElementById("live-score");
const progressFillEl = document.getElementById("progress-fill");
const timerFillEl = document.getElementById("timer-fill");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const feedbackBoxEl = document.getElementById("feedback-box");
const feedbackStatusEl = document.getElementById("feedback-status");
const feedbackExplanationEl = document.getElementById("feedback-explanation");
const actionBtn = document.getElementById("action-btn");

const scorePercentageEl = document.getElementById("score-percentage");
const scoreFractionEl = document.getElementById("score-fraction");
const resultTitleEl = document.getElementById("result-title");
const resultMessageEl = document.getElementById("result-message");
const statCorrectEl = document.getElementById("stat-correct");
const statWrongEl = document.getElementById("stat-wrong");
const statTimeEl = document.getElementById("stat-time");
const reviewListEl = document.getElementById("review-list");
const restartBtn = document.getElementById("restart-btn");

// Quiz State
let activeQuestions = [];
let currentIndex = 0;
let selectedOptionIndex = null;
let isAnswered = false;
let score = 0;
let timerInterval = null;
let timeLeft = TIME_PER_QUESTION;
let totalTimeSpent = 0;
let userHistory = [];

// Update question count preview on category change
categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  const count = selected === "all"
    ? QUESTION_BANK.length
    : QUESTION_BANK.filter(q => q.category === selected).length;
  startQCount.textContent = count;
});

function switchScreen(screenKey) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screenKey].classList.add("active");
}

function initQuiz() {
  const category = categorySelect.value;
  const filtered = category === "all"
    ? [...QUESTION_BANK]
    : QUESTION_BANK.filter(q => q.category === category);

  // Shuffle questions for variety
  activeQuestions = filtered.sort(() => Math.random() - 0.5);
  currentIndex = 0;
  score = 0;
  totalTimeSpent = 0;
  userHistory = [];

  switchScreen("quiz");
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timerInterval);
  isAnswered = false;
  selectedOptionIndex = null;

  const current = activeQuestions[currentIndex];
  const total = activeQuestions.length;

  // Header & Progress updates
  questionCategoryEl.textContent = current.categoryLabel;
  questionCounterEl.textContent = `Question ${currentIndex + 1} of ${total}`;
  liveScoreEl.textContent = `Score: ${score}`;
  progressFillEl.style.width = `${((currentIndex) / total) * 100}%`;

  // Question & Options render
  questionTextEl.textContent = current.question;
  optionsListEl.innerHTML = "";

  current.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.innerHTML = `
      <span class="option-badge">${OPTION_LETTERS[idx]}</span>
      <span class="option-label">${optionText}</span>
    `;
    btn.addEventListener("click", () => selectOption(idx));
    optionsListEl.appendChild(btn);
  });

  // Reset feedback & button
  feedbackBoxEl.className = "feedback-box";
  actionBtn.textContent = "Submit Answer";

  startTimer();
}

function selectOption(index) {
  if (isAnswered) return;
  selectedOptionIndex = index;

  const buttons = optionsListEl.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("selected", idx === index);
  });
}

function startTimer() {
  timeLeft = TIME_PER_QUESTION;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      evaluateAnswer(true);
    }
  }, 1000);
}

function updateTimerUI() {
  timerTextEl.textContent = `${timeLeft}s`;
  const percentage = (timeLeft / TIME_PER_QUESTION) * 100;
  timerFillEl.style.width = `${percentage}%`;

  if (timeLeft <= 5) {
    timerPillEl.classList.add("warning");
    timerFillEl.style.backgroundColor = "var(--danger)";
  } else {
    timerPillEl.classList.remove("warning");
    timerFillEl.style.backgroundColor = "var(--success)";
  }
}

function evaluateAnswer(timedOut = false) {
  if (isAnswered) return;

  if (!timedOut && selectedOptionIndex === null) {
    feedbackBoxEl.className = "feedback-box show incorrect";
    feedbackStatusEl.textContent = "Selection Required";
    feedbackExplanationEl.textContent = "Please choose an option before submitting.";
    return;
  }

  clearInterval(timerInterval);
  isAnswered = true;

  const current = activeQuestions[currentIndex];
  const buttons = optionsListEl.querySelectorAll(".option-btn");
  const spent = TIME_PER_QUESTION - timeLeft;
  totalTimeSpent += spent;

  const chosenText = selectedOptionIndex !== null ? current.options[selectedOptionIndex] : null;
  const isCorrect = chosenText === current.correct_answer;

  if (isCorrect) score++;
  liveScoreEl.textContent = `Score: ${score}`;

  // Highlight correct and incorrect options
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    const optionValue = current.options[idx];
    if (optionValue === current.correct_answer) {
      btn.classList.add("correct");
    } else if (idx === selectedOptionIndex && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  // Display explanation
  feedbackBoxEl.className = `feedback-box show ${isCorrect ? "correct" : "incorrect"}`;
  if (timedOut) {
    feedbackStatusEl.textContent = `Time's Up! Correct Answer: ${current.correct_answer}`;
  } else if (isCorrect) {
    feedbackStatusEl.textContent = "Correct!";
  } else {
    feedbackStatusEl.textContent = `Incorrect — Correct Answer: ${current.correct_answer}`;
  }
  feedbackExplanationEl.textContent = current.explanation;

  // Record history for review screen
  userHistory.push({
    question: current.question,
    chosen: chosenText || "Timed Out",
    correct: current.correct_answer,
    isCorrect
  });

  actionBtn.textContent = currentIndex + 1 < activeQuestions.length ? "Next Question →" : "View Results →";
}

function handleActionClick() {
  if (!isAnswered) {
    evaluateAnswer(false);
  } else {
    currentIndex++;
    if (currentIndex < activeQuestions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
}

function showResults() {
  progressFillEl.style.width = "100%";
  switchScreen("result");

  const total = activeQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const avgTime = Math.round(totalTimeSpent / total);

  scorePercentageEl.textContent = `${percentage}%`;
  scoreFractionEl.textContent = `${score} / ${total}`;
  statCorrectEl.textContent = score;
  statWrongEl.textContent = total - score;
  statTimeEl.textContent = `${avgTime}s`;

  if (percentage >= 80) {
    resultTitleEl.textContent = "Outstanding Mastery!";
    resultMessageEl.textContent = "You demonstrated strong command across the assessment.";
  } else if (percentage >= 50) {
    resultTitleEl.textContent = "Solid Performance!";
    resultMessageEl.textContent = "Good job! Review the missed questions below to sharpen your edge.";
  } else {
    resultTitleEl.textContent = "Keep Practicing!";
    resultMessageEl.textContent = "Review the explanations below and take another shot.";
  }

  reviewListEl.innerHTML = userHistory.map((item, i) => `
    <div class="review-item">
      <div class="review-item-q">${i + 1}. ${item.question}</div>
      <div class="review-item-a">
        Your answer: <strong class="${item.isCorrect ? 'text-success' : 'text-danger'}">${item.chosen}</strong>
        ${!item.isCorrect ? ` | Correct: <strong class="text-success">${item.correct}</strong>` : ""}
      </div>
    </div>
  `).join("");
}

// Event Listeners
startBtn.addEventListener("click", initQuiz);
actionBtn.addEventListener("click", handleActionClick);
restartBtn.addEventListener("click", () => switchScreen("start"));

// Keyboard Accessibility (1-4 to pick option, Enter to submit/next)
document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("active")) return;

  if (["1", "2", "3", "4"].includes(e.key) && !isAnswered) {
    const idx = parseInt(e.key, 10) - 1;
    if (idx < activeQuestions[currentIndex].options.length) {
      selectOption(idx);
    }
  } else if (e.key === "Enter") {
    e.preventDefault();
    handleActionClick();
  }
});