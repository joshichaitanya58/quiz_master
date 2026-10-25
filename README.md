# QuizMaster Pro — Interactive Knowledge Quiz 🎓

QuizMaster Pro is a responsive, browser-based multiple-choice quiz application built with **HTML, CSS, and vanilla JavaScript**. It challenges users with timed questions across computer science, science, space, and general knowledge, then provides instant feedback and a performance summary.

<p align="center">
  <strong>Topic Filters · Timed Questions · Live Scoring · Explanations · Answer Review</strong>
</p>

## ✨ Features

- **Multiple-choice quiz** with four answer options per question.
- **Topic selection** to practice all questions or focus on a category:
  - Computer Science & Technology
  - Science & Space
  - World & General Trivia
- **15-second timer** for each question.
- **Live score** and question progress indicators.
- **Instant answer feedback** with correct and incorrect options highlighted.
- **Answer explanations** to help users understand the correct answer.
- **Performance summary** with percentage, correct answers, incorrect answers, and average time.
- **Answer review** showing the questions and responses from the completed attempt.
- **Keyboard shortcuts** for selecting answers and continuing through the quiz.
- **Responsive layout** for desktop and mobile screens.
- **No installation or backend required** — runs directly in a modern browser.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and quiz screens |
| CSS3 | Responsive design, transitions, progress bars, and feedback states |
| JavaScript (Vanilla) | Question bank, timer, scoring, answer validation, and results |
| Google Fonts (Inter) | Interface typography |

## 🚀 Getting Started

### Option 1: Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/joshichaitanya58/quiz_master.git
   ```

2. Open the project folder:

   ```bash
   cd quiz_master
   ```

3. Open `index.html` in your browser.

You can also open the folder in Visual Studio Code and use the **Live Server** extension.

> If your GitHub repository uses a different name, replace the repository URL and folder name above with the correct values.

### Option 2: Use GitHub Pages

If GitHub Pages is enabled for this repository, open the published site from the repository's **Settings → Pages** section.

## 🎮 How to Play

1. Select **All Categories** or choose a specific topic.
2. Click **Start Assessment**.
3. Read the question and select one of the four options.
4. Click **Submit Answer** before the 15-second timer expires.
5. Review the feedback and explanation.
6. Continue through the questions to the results screen.
7. Review your score and answers, then choose **Play Again** to start another attempt.

If the timer reaches zero, the current question is evaluated automatically.

## ⌨️ Keyboard Shortcuts

The interface provides a keyboard hint for selecting options and continuing. Available shortcuts are implemented in `app.js`; check that file for the exact current key bindings.

## 📊 Scoring & Results

At the end of a quiz, QuizMaster Pro displays:

- **Score percentage**
- **Correct answers**
- **Incorrect or unanswered questions**
- **Average time per question**
- **Answer review**, including question details and feedback

Questions are shuffled at the beginning of each attempt to provide variety.

## 📁 Project Structure

```text
quiz_master/
├── index.html   # Start screen, quiz screen, and results screen
├── style.css    # Layout, responsive styling, and animations
├── app.js       # Question bank, timer, quiz flow, scoring, and answer review
└── README.md    # Project documentation
```

## 🌱 Possible Future Enhancements

- Add more questions and difficulty levels.
- Randomize answer options as well as questions.
- Save scores and quiz history using local storage.
- Add a leaderboard and user profiles.
- Support custom quizzes and question imports.
- Improve accessibility with additional keyboard navigation and screen-reader labels.
- Add unit tests for timer behavior, scoring, and answer validation.

## 👨‍💻 Author

Created as a web-based quiz project for **TechInterex Internship Task 3**.

**Chaitanya Joshi**

- GitHub: [@joshichaitanya58](https://github.com/joshichaitanya58)
- Portfolio: [my-portfolio-delta-virid-82.vercel.app](https://my-portfolio-delta-virid-82.vercel.app/)
- LinkedIn: [Chaitanya Joshi](https://www.linkedin.com/in/chaitanya-joshi-644b39298/)

---

<p align="center">Built with HTML, CSS, and JavaScript.</p>
