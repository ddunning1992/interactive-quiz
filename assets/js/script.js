var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start");

var quizQuestions = [
  {
    question: "Inside of which HTML element do we place the JavaScript?",
    answers: {
      A: "<script>",
      B: "<scripting",
      C: "<javascript>",
      D: "<js>"
    },
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      A: "<head>",
      B: "top of the <body>",
      C: "<footer>",
      D: "bottom of the <body>"
    },
  },
  {
    question: "What is the correct syntax for referring to an external script called xxx.js?",
    answers: {
      A: "<script href='xxx.js'>",
      B: "<script src='xxx.js'>",
      C: "<script name='xxx.js'>",
      D: "<script file='xxx.js'>"
    },
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: {
      A: "True",
      B: "False",
      C: "",
      D: ""
    },
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      A: "alert('Hello World');",
      B: "alertBox('Hello World');",
      C: "msgBox('Hello World');",
      D: "msg('Hello World');"
    },
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      A: "function myFunction()",
      B: "function:myFunction()",
      C: "function = myFunction()",
      D: ""
    },
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      A: "call function myFunction()",
      B: "myFunction()",
      C: "call myFunction",
      D: ""
    },
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      A: "if i == 5 then",
      B: "if (i == 5)",
      C: "if i = 5 then",
      D: "if i = 5"
    },
  },
]

function countdown() {
  timerEl.textContent = "Time left: " + timeLeft;

  var timeInterval = setInterval(function() {
    timerEl.textContent  = "Time left: " + timeLeft;
    timeLeft--;
    if (timeLeft === -1) {
      window.clearInterval(timeInterval);
      //displayMessage();
      }
    }, 200);
};

function startPage() {

}

function buildQuiz() {
 
}

function showResults() {

}

startPage();

startButton.addEventListener("click", startQuiz);
