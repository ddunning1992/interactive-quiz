var timeLeft = 60;
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start");
var scoreLink = document.getElementById("view-scoreboard");
var titleEl = document.getElementById("title");
var questionEl = document.getElementById("question");
var answerList = document.getElementById("answer-list");

var startInfo = {
  title: "JavaScript Quiz",
  text: "You have 60 seconds to answer all the questions. Wrong answers will deduct 10 seconds from your time. Your time remaining at the end of the quiz will be your score."
};

var highScores = [];

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
  i++;
  if (i === quizQuestions.length) {
    showResults(); 
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
  timerEl.style.display = "none";
  answerList.innerHTML = "";

  questionEl.innerHTML = "Your final score is " + timeLeft + ".";

  playerScore = timeLeft;

  playerNameInput = window.prompt("Enter Your Initials");


  var currentHighScores = localStorage.getItem("high-scores");
  if (!currentHighScores) {
    var playerDataObj = {
      name: playerNameInput,
      score: playerScore,
    };
    highScores.push(playerDataObj);
    saveScore();
  }
  else if (currentHighScores) {
    currentHighScores = JSON.parse(currentHighScores);

    highScores.push(currentHighScores);

    var playerDataObj = {
      name: playerNameInput,
      score: playerScore,
    };
    highScores.push(playerDataObj);
  }
  

  saveScore();
  
  //answerList.innerHTML = "<form></form>";
  //var highScoreForm = document.createElement("input");
  //highScoreForm.setAttribute("type", "text");
  //highScoreForm.setAttribute("placeholder", "Enter Your Initials");
  //answerList.appendChild(highScoreForm);

  //var scoreSubmit = document.createElement("button");
  //scoreSubmit.setAttribute("id", "save-score");
  //scoreSubmit.textContent = "Submit Score";
  //answerList.appendChild(scoreSubmit);

};

function viewHighScores() {
  questionEl.innerHTML = "Here's the high scores!";
  answerList.innerHTML = document.createElement("ul");

  var firstPlace = document.createElement("li");
  answerList.appendChild(firstPlace);
  var secondPlace = document.createElement("li");
  answerList.appendChild(secondPlace);
  var thirdPlace = document.createElement("li");
  answerList.appendChild(thirdPlace);

  var scoreBoard = [];

  var savedScores = localStorage.getItem("high-scores");

  savedScores = JSON.parse(savedScores);
  console.log(savedScores);

  scoreBoard.push(savedScores[i]);
  scoreBoard.sort(function(a, b) {
    return a.score - b.score;
  });

  firstPlace.innerHTML = "<h5>First Place: " + scoreBoard[0].name + " Score: " + scoreBoard[0].score + "</h5>";
  secondPlace.innerHTML = "<h5>Second Place: " + scoreBoard[1].name + " Score: " + scoreBoard[1].score + "</h5>";
  thirdPlace.innerHTML = "<h5>Third Place: " + scoreBoard[2].name + " Score: " + scoreBoard[2].score + "</h5>";
};

var saveScore = function() {
  localStorage.setItem("high-scores", JSON.stringify(highScores));
};

startPage();

startButton.addEventListener("click", startQuiz);

scoreLink.addEventListener("click", viewHighScores);

