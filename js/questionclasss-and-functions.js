class Question {
  constructor(question, rightanswer) {
    this.question = question;
    this.rightanswer = rightanswer;
    this.input = ``;
  }
}

//next Question
function quizClicked() {
  // OUTPUT
  document.getElementById(
    "quiz"
  ).innerHTML = `<h1 class="center">Random Quiz </h1>
  <p class="center">(NEW AND IMPROVED)</p>
  <hr />
  `;
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementById("quiz").innerHTML += `
  
  <h3>Question ${i + 1}:</h3>
  <p>${questionArray[i].question}</p>  
  <h4>
  Answer: <input id="question${i + 1}in" type="text" />
  <span id="answer${i + 1}Is"> </span>
</h4>
<br />`;
  }

  document.getElementById("btn").addEventListener("click", markquizbtnClicked);
  document.getElementById("btn").innerHTML = "Mark Quiz";
  document.getElementById("btn").removeEventListener("click", quizClicked);
}

function markquizbtnClicked() {
  //Change display
  document.getElementById("quizMark").style.display = "block";
  document.getElementById("btn").style.display = "none";

  //Process

  score = 0;

  for (let i = 0; i < questionArray.length; i++) {
    score += markQuestion(
      `question${i + 1}in`,
      `answer${i + 1}Is`,
      `${questionArray[i].rightanswer}`
    );
  }

  // OUTPUT
  document.getElementById("quizMark").innerHTML = `      <h1>
  Your Score: ${score} / ${questionArray.length} (${Math.round(
    (score / questionArray.length) * 100
  )}%)</h1>`;
}

function markQuestion(inputID, outputID, rightanswers) {
  let answer = document.getElementById(inputID).value.toLowerCase();
  if (answer === rightanswers) {
    document.getElementById(
      outputID
    ).innerHTML = `<span class="correct">     Correct</span>
      `;
    document.getElementById(inputID).style.border = "2px solid green";
    return 1;
  } else {
    document.getElementById(
      outputID
    ).innerHTML = `<span class="wrong">   Incorrect</span>
          `;
    document.getElementById(inputID).style.border = "2px solid red";
    return 0;
  }
}
