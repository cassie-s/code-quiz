const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question: "Commonly used data types do NOT Include:",
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      answer: 1,
  },
    {
    question: "The condition in an if / else statement is enclosed with ______.",
      choice1: "quotes",
      choice2: "curly brackets",
      choice3: "parenthesis",
      choice4: "square brackets",
      answer: 3,
  },
    {
    question: "Arrays in Javascript can be used to store _______.",
      choice1: "numbers and strings",
      choice2: "other arrays",
      choice3: "booleans",
      choice4: "all of the above",
      answer: 4,
  },
    {
    question: "String values must be enclosed within _______ hwne being assigned to variables.",
      choice1: "commas",
      choice2: "curly brackets",
      choice3: "quotes",
      choice4: "parenthesis",
      answer: 3,
  },
    {
    question: "A very useful tool used during development and debuging for printing content to the debugger is:",
      choice1: "JavaScript",
      choice2: "terminal/bash",
      choice3: "for loops",
      choice4: "console.log",
      answer: 4,
  },
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        var resultBox = document.getElementById("correct-text");
        if (selectedAnswer == currentQuestion.answer) {
            resultBox.innerHTML="Correct!",document.getElementById('correct-text').style.fontSize = "xx-large";
        } else {
            resultBox.innerHTML="Wrong!",document.getElementById('correct-text').style.fontSize = "xx-large";
        }

        getNewQuestion();
    });
});

startGame();