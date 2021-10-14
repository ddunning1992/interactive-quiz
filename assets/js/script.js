var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start");
//var quizBoxEl = document.getElementById("quiz");
var titleEl = document.getElementById("title");
var questionEl = document.getElementById("question");
var answerList = document.getElementById("answer-list");

var startInfo = {
  title: "JavaScript Quiz",
  text: "You have 60 seconds to answer all the questions. Wrong answers will deduct 10 seconds from your time. Your time remaining at the end of the quiz will be your score."
};

var quizQuestions = [
  {
    question: "Inside of which HTML element do we place the JavaScript?",
    answers: {
      A: "<script>",
      B: "<scripting>",
      C: "<javascript>",
      D: "<js>"
    },
    correctAnswer: "<script>"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      A: "<head>",
      B: "top of the <body>",
      C: "<footer>",
      D: "bottom of the <body>"
    },
    correctAnswer: "bottom of the <body>"
  },
  {
    question: "What is the correct syntax for referring to an external script called xxx.js?",
    answers: {
      A: "<script href='xxx.js'>",
      B: "<script src='xxx.js'>",
      C: "<script name='xxx.js'>",
      D: "<script file='xxx.js'>"
    },
    correctAnswer: "<script src='xxx.js'>"
  },
  {
    question: "The external JavaScript file must contain the script tag.",
    answers: {
      A: "True",
      B: "False",
      C: "",
      D: ""
    },
    correctAnswer: "False"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      A: "alert('Hello World');",
      B: "alertBox('Hello World');",
      C: "msgBox('Hello World');",
      D: "msg('Hello World');"
    },
    correctAnswer: "alert('Hello World');"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      A: "function myFunction()",
      B: "function:myFunction()",
      C: "function = myFunction()",
      D: ""
    },
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      A: "call function myFunction()",
      B: "myFunction()",
      C: "call myFunction",
      D: ""
    },
    correctAnswer: "myFunction()"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      A: "if i == 5 then",
      B: "if (i === 5)",
      C: "if i = 5 then",
      D: "if i = 5"
    },
    correctAnswer: "if (i === 5)"
  },
];

function countdown() {
  timerEl.textContent = "Time left: " + timeLeft;

  var timeInterval = setInterval(function() {
    timerEl.textContent  = "Time left: " + timeLeft;
    timeLeft--;
    if (timeLeft === -1) {
      window.clearInterval(timeInterval);
      //displayMessage();
      }
    }, 1000);
};

var startPage = function() {
  titleEl.innerHTML = startInfo.title;
  questionEl.innerHTML = startInfo.text; 
}

var i = 0;

function startQuiz() {
  countdown();
  startButton.style.display = "none";
  displayQuestion();
  
  
};

function nextQuestion() {
  console.log(this);
  i++;
  if (i === quizQuestions.length) {
    console.log("end game");  
  }
  else {
    displayQuestion();
  }
}

function displayQuestion() {
  questionEl.innerHTML = quizQuestions[i].question;
  answerList.innerHTML = "";  

  var answerElA = document.createElement("button");
  answerElA.textContent = quizQuestions[i].answers.A;

  var answerElB = document.createElement("button");
  answerElB.textContent = quizQuestions[i].answers.B;

  var answerElC = document.createElement("button");
  answerElC.textContent = quizQuestions[i].answers.C;
  if (!quizQuestions[i].answers.C) {
    answerElC.style.display = "none";
  }

  var answerElD = document.createElement("button");
  answerElD.textContent = quizQuestions[i].answers.D;
  if (!quizQuestions[i].answers.D) {
    answerElD.style.display = "none";
  }

  answerList.appendChild(answerElA);
  answerList.appendChild(answerElB);
  answerList.appendChild(answerElC);
  answerList.appendChild(answerElD);
};

answerList.addEventListener("click", function(event) {
  var userAnswer = event.target.textContent;

  if (userAnswer === quizQuestions[i].correctAnswer) {
    nextQuestion();
  }
  else {
    alert("Wrong Answer");
    timeLeft -= 10;
  };
});

function showResults() {

};

startPage();

startButton.addEventListener("click", startQuiz);

