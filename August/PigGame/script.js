'use strict';

// select elements
const score0Ele = document.querySelector("#score--0");
const score1Ele = document.getElementById("score--1");
const diceEle = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0Ele = document.getElementById("current--0");
const current1Ele = document.getElementById("current--1");
const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");

// starting conditions:
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add("hidden");

// global varaibles
let scores = [0, 0]; 
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0Ele.classList.toggle("player--active");
    player1Ele.classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
}

// rolling functionality:
btnRoll.addEventListener("click", function(){
    if (playing){
        // 1. Generate a random dice roll;
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display dice
        diceEle.classList.remove("hidden");
        diceEle.src = `dice-${dice}.png`;
        // 3. check for rolled 1: if true, switch to the next player
        if (dice === 1){
            // switch to the next player
            switchPlayer();
        } else{
            // add dice to the current score:
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        }
    }
});


// button hold:
btnHold.addEventListener("click", function(){
    if (playing){
        // 1. add currentScore to the active player's socre:
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. check if score >= 100
        // finish the game
        if(scores[activePlayer] >= 50){
            playing = false;
            diceEle.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
        }else{
            // Switch to the next player:
            switchPlayer();
        }
    }
}
);


// reset the game:
btnNew.addEventListener("click", function(){
    // 1. 
    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    player0Ele.classList.add("player--active");
    scores = [0, 0]; 
    currentScore = 0;
    activePlayer = 0;
    playing = true;


});


















