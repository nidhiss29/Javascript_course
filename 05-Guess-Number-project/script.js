'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20)+1;  //between 1 and 20s


let score = 20;  
let highscore = 0;        
const displayMessage = function(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){ //sab click event ke baad hi hoga
  const guess = Number((document.querySelector('.guess').value));
  console.log(guess, typeof guess);
//no input
  if(!guess){
   // document.querySelector('.message').textContent = " ⛔ No Value!!"
    displayMessage(" ⛔ No Value!!");
  }
//wins
  else if(guess === secretNumber){
  //  document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';   //inline styles
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore ;
    }
   
  }


  else if(guess !== secretNumber){
    if(score > 1){
    //  document.querySelector('.message').textContent = score > secretNumber ? ' 📈Too High' : '📉Too Low';
      displayMessage(guess > secretNumber ? ' 📈Too High' : '📉Too Low');
      score-- ;
      document.querySelector('.score').textContent = score;
     }
else{// document.querySelector('.message').textContent = ' 💥You lost the game!';
displayMessage(' 💥You lost the game!');
document.querySelector('.score').textContent = 0;
  }
  //very high guess //have duplicate code refactoring done
/*   else if(guess > secretNumber){
       if(score > 1){
        document.querySelector('.message').textContent = ' 📈Too High';
        score-- ;
        document.querySelector('.score').textContent = score;
       }
  else{ document.querySelector('.message').textContent = ' 💥You lost the game!';
  document.querySelector('.score').textContent = 0;
}

   
   }
   //very low guess
   else if(guess < secretNumber){

    if(score  > 1 ){
      document.querySelector('.message').textContent = ' 📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = ' 💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  
   }   */
  }
});


document.querySelector('.again').addEventListener('click', function(){
  score =  20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing.....';
  displayMessage('Start guessing.....');
  let secretNumber = Math.trunc(Math.random()*20)+1;  

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = 0;
});


