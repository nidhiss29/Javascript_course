'use strict';  //my code

//selecting elements
/* const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
 const diceEl = document.querySelector('.dice');
const btnNew =  document.querySelector('.btn--new');
const btnRoll=  document.querySelector('.btn--roll');
const btnHold=  document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1'); */

 //starting condition
/*score0El.textContent=0;
score1El.textContent=0;
*/

/*let scores , currentScore , activePlayer , playing;

const init = function(){
   scores= [0,0];   //here no issue of scoping as reassingning not initializing , initialize outside reenter value inside
 activePlayer = 0;  //0 and 1 as scores at 0 and 1 
  playing = true;
 currentScore = 0;
score0El.textContent=0;
score1El.textContent=0;
current0El.textContent = 0;
current1El.textContent = 0;
player0El.classList.remove(`player--winner`);
player1El.classList.remove(`player--winner`);
player0El.classList.add(`player--active`);
player1El.classList.remove(`player--active`);
}

init();

 /*const scores= [0,0];
let activePlayer = 0;  //0 and 1 as scores at 0 and 1 
let playing = true;
let currentScore = 0; //outside function as if inside will be rest to zero everytime we roll  */

/*diceEl.classList.add('hidden'); //in starting making dice invisible


const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore =0; 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//dice rolling function

btnRoll.addEventListener('click' , function(){
  if(playing){

  
  //1. generating random dice roll
    const dice = Math.trunc(Math.random()*6)+1; 

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;


  //3.check if 1 then switch player
  
//add dice to current score
if (dice !== 1) {
  // Add dice to current score
  currentScore += dice;

  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
      }
    else{

      switchPlayer();
       //switch to next player 
//need to track which is active player
  /*document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore =0; 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
      */ 
   /* }  } });


//holding the score
btnHold.addEventListener('click', function(){
if(playing){
 // console.log('hold button') ;  //catching erroe
  //add current score to active player's
   scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  //check if score atleast 100 then finish games
  playing = false;
    if(scores[activePlayer] >= 20){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
else{
  switchPlayer();
}  }  });

btnNew.addEventListener('click' , init /* function(){
  score0El.textContent=0;
score1El.textContent=0;
current0El.textContent = 0;
current1El.textContent = 0;
player0El.classList.remove(`player--winner`);
player1El.classList.remove(`player--winner`);
player0El.classList.add(`player--active`);
player1El.classList.remove(`player--active`); 

}  );            */


// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);