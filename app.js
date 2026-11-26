//   GLOBAL VARIEBLES 
let allQuestions = [];
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let showTranslation = false;
let isMistakesMode = false;
let mistakes = JSON.parse(localStorage.getItem('pdd_mistakes')) || [];

//   Timer Variables (20 minutes = 1200 seconds)
let timeLeft = 1200;
let timerInterval = null;

//   DOM Elements
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const filterMistakesBtn = document.getElementById('filter-mistakes-btn');
const imgEl = document.getElementById('q-img');
const qRuEl = document.getElementById('q-ru');
const qEnEl = document.getElementById('q-en');
const optionsContainer = document.getElementById('options-container');
const noteBox = document.getElementById('note-box');
const nextBtn = document.getElementById('next-btn');
const translateBtn = document.getElementById('translate-btn');
const speakBtn = document.getElementById('speak-btn');
const restartBtn = document.getElementById('restart-btn');

// Fisher-Yates Shuffle Algorithm (Randomizes without repetition)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Start or Reset 20-Minute Timer
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 1200;
  timerEl.classList.remove('danger');
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 60) {
      timerEl.classList.add('danger'); // Turn red in last minute
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz("⏰ Time is up!");
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.innerText = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 1. Load questions from JSON
async function loadQuestions() {
  try {
    const response = await fetch('questions.json');
    allQuestions = await response.json();
    startNewSession();
  } catch (error) {
    qRuEl.innerText = "Error loading questions.json!";
    console.error(error);
  }
}

// Start a fresh randomized session
function startNewSession() {
  currentIndex = 0;
  score = 0;
  if (isMistakesMode) {
    activeQuestions = shuffleArray(allQuestions.filter(q => mistakes.includes(q.id)));
  } else {
    activeQuestions = shuffleArray(allQuestions);
  }
  updateMistakesButton();
  startTimer();
  renderQuestion();
}

function updateMistakesButton() {
  filterMistakesBtn.innerText = isMistakesMode 
    ? `🔙 All (${allQuestions.length})` 
    : `⚠️ Mistakes: ${mistakes.length}`;
  filterMistakesBtn.classList.toggle('active', isMistakesMode);
}

// 2. Render current question
function renderQuestion() {
  if (activeQuestions.length === 0) {
    clearInterval(timerInterval);
    qRuEl.innerText = "🎉 Great job! No mistakes left to review.";
    qEnEl.style.display = 'none';
    imgEl.style.display = 'none';
    optionsContainer.innerHTML = '';
    noteBox.style.display = 'none';
    nextBtn.style.display = 'none';
    progressEl.innerText = "0 / 0";
    return;
  }

  const q = activeQuestions[currentIndex];
  progressEl.innerText = `Question ${currentIndex + 1} / ${activeQuestions.length}`;

  if (q.image) {
    imgEl.src = q.image;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }

  qRuEl.innerText = q.question_ru;
  qEnEl.innerText = q.question_en;
  qEnEl.style.display = showTranslation ? 'block' : 'none';

  noteBox.style.display = 'none';
  nextBtn.style.display = 'none';
  optionsContainer.innerHTML = '';

  // Also shuffle answer options for better practice
  const shuffledOptions = shuffleArray(q.options);

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <div>${opt.ru}</div>
      <div class="option-en" style="display: ${showTranslation ? 'block' : 'none'}">${opt.en}</div>
    `;
    btn.onclick = () => checkAnswer(btn, opt.isCorrect, q, shuffledOptions);
    optionsContainer.appendChild(btn);
  });
}

// 3. Check answer
function checkAnswer(selectedBtn, isCorrect, questionObj, displayedOptions) {
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
    if (isMistakesMode && mistakes.includes(questionObj.id)) {
      mistakes = mistakes.filter(id => id !== questionObj.id);
      localStorage.setItem('pdd_mistakes', JSON.stringify(mistakes));
    }
  } else {
    selectedBtn.classList.add('wrong');
    if (!mistakes.includes(questionObj.id)) {
      mistakes.push(questionObj.id);
      localStorage.setItem('pdd_mistakes', JSON.stringify(mistakes));
      updateMistakesButton();
    }
    displayedOptions.forEach((opt, idx) => {
      if (opt.isCorrect) allBtns[idx].classList.add('correct');
    });
  }

  noteBox.innerText = `💡 Note: ${questionObj.note_en}`;
  noteBox.style.display = 'block';
  nextBtn.innerText = (currentIndex + 1 === activeQuestions.length) ? "Finish Exam 🏁" : "Next Question ➡️";
  nextBtn.style.display = 'block';
}

// Show final summary when all 20 questions are completed
function finishQuiz(title = "🏁 Round Completed!") {
  clearInterval(timerInterval);
  const wrongCount = activeQuestions.length - score;
  const passed = !isMistakesMode && wrongCount <= 2; // Official PDD rule: max 2 mistakes

  qRuEl.innerText = title;
  qEnEl.innerText = `Score: ${score} / ${activeQuestions.length} | Mistakes: ${wrongCount} ${!isMistakesMode ? (passed ? "✅ (PASSED)" : "❌ (FAILED - Max 2 mistakes allowed)") : ""}`;
  qEnEl.style.display = 'block';
  imgEl.style.display = 'none';
  optionsContainer.innerHTML = '';
  noteBox.style.display = 'none';
  nextBtn.style.display = 'none';
}

// Event Listeners
filterMistakesBtn.onclick = () => {
  isMistakesMode = !isMistakesMode;
  startNewSession();
};

restartBtn.onclick = () => startNewSession();

translateBtn.onclick = () => {
  showTranslation = !showTranslation;
  qEnEl.style.display = showTranslation ? 'block' : 'none';
  document.querySelectorAll('.option-en').forEach(el => {
    el.style.display = showTranslation ? 'block' : 'none';
  });
};

speakBtn.onclick = () => {
  if (activeQuestions.length === 0) return;
  const utterance = new SpeechSynthesisUtterance(activeQuestions[currentIndex].question_ru);
  utterance.lang = 'ru-RU';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};

nextBtn.onclick = () => {
  if (currentIndex + 1 < activeQuestions.length) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
};

loadQuestions();