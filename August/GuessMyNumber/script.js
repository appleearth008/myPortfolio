'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function (){
    const guessFromUser = Number(document.querySelector('.guess').value); 
    console.log(guessFromUser, typeof guessFromUser);
    if (!guessFromUser){
        document.querySelector(".message").textContent = "No number!";
        
        // when player wins
    } else if(guessFromUser === secretNumber){
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "Correct number!";
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = "30rem";

        if(score > highScore){
            highScore = score;
        }
        document.querySelector(".highscore").textContent = highScore;

    } else if(guessFromUser < secretNumber){
        if(score === 1){
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "You lose the game!";
        }else{
            document.querySelector(".message").textContent = "Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
    } else if (guessFromUser > secretNumber){
        if (score === 1){
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "You lose the game!";
        }else{
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        }
    }
});

document.querySelector(".again").addEventListener('click', function (){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".message").textContent = 'Start guessing ...';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score").textContent = score;
    // here guess is an input, therefore, we cannot use .textContent, should use .value instead.
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = "15rem";
});






