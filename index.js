var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name? ");
console.log("Welcome! " + userName + " To How Well Do You Know ANJALI. ");
console.log("-------------------");
console.log('\n');
 
// rules
console.log("Each correct answer will give you 1 mark whereas a wrong answer will deduct one. ");
console.log("-------------------");
console.log('\n');

// play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right! ");
    score = score + 1;
  }
  else{
    console.log("Opps! You are wrong. ");
    score = score - 1;
  }
  
  console.log("Your score is " + score);
  console.log("-------------------");
}

// questions
var questions = [
  {
    question: "Where do I live? ",
    answer: "Thane",
  },

  {
    question: "Who is my favourite actor? ",
    answer: "Akshay Kumar",
  },

  {
    question: "What is my favourite food? ",
    answer: "Vadapav",
  },

  {
    question: "Wihch is my favourite color? ",
    answer: "Blue",
  },

  {
    question: "Which is my favourite book? ",
    answer: "Harry Potter",
  },
  
];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Yay! You scored: " + score);
