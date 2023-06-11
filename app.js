var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("whats' your name?");
console.log("Welcome " + userName);

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("right!");
    score = score + 1;
  } else{
      console.log("Wrong!");
  }
}

console.log("current score:", score);
console.log("-----");

var questionOne ={
     question: "Which is Ash's first Pokemon?",
     answer: "Pikachu"
}

var questionTwo = {
  question: "Which is the hometown of Ash?",
  answer: "Pallet Town"
}

var questionThree={
    question:"which type of Pokemon does Misty afraid of?",
    answer: "Bug"
}

var questionFour = {
  question: "where is the Brock's gym located?",
  answer: "Pewter City"

}


var questions = [questionOne, questionTwo, questionThree, questionFour];

for(var i=0;i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
    
console.log("Yay! You scored: ", score);

  