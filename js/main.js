//Random Questions Quiz
document.getElementById("quizMark").style.display = "none";

//Initialize Questions
let questionArray = [];
questionArray.push(
  new Question("What is the most common surname in the United States?", "smith")
);
questionArray.push(
  new Question("What color does red and yellow make?", "orange")
);
questionArray.push(
  new Question(
    "Roald Amundsen was the first man to reach the South Pole, but where was he from?",
    "norway"
  )
);
questionArray.push(
  new Question("Aureolin is a shade of what color?", "yellow")
);
questionArray.push(
  new Question("What fish is used to make calamari?", "squid")
);
questionArray.push(new Question("How many Great Lakes are there? Please write your answer as a number", "5"));
questionArray.push(
  new Question("Can you really see the Great Wall of China from space?", "no")
);
questionArray.push(
  new Question("From which direction does the sun rise?", "east")
);
questionArray.push(
  new Question("What is the largest island in the world?", "greenland")
);
questionArray.push(
  new Question("What is the chemical symbol for oxygen?", "o")
);
questionArray.push(
  new Question(
    "The Venus de Milo is a statue missing which part of the body?",
    "arms"
  )
);
questionArray.push(
  new Question("What month was Julius Caesar stabbed in?", "march")
);
questionArray.push(new Question("How many bones do sharks have? Please write your answer as a number.", "0"));

//Start Quiz!

document.getElementById(
  "quiz"
).innerHTML = `<h2 class ='center'>Are you ready to start the quiz?</h1>`;

document.getElementById("btn").addEventListener("click", quizClicked);
document.getElementById("btn").innerHTML = "Yes! Start!";
