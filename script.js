'use strict';
const rollDice = document.querySelector('.roll');
const diceImage = document.querySelector('.diceImage');
const holdButton = document.querySelector('.holdButton');
let score = 0;
let activePlayer = 0;
let totalScore = [0,0];
let playing = true;




const rollDiceClick = function(){
    if(playing === true){
    const play = document.getElementsByClassName(`player--${activePlayer}`);//background color change
    for(let i=0; i<play.length; i++)
        {
             play[i].classList.add('activePlay');
        };
    const luckyNumbers = Math.trunc(Math.random()*6) + 1;
    diceImage.classList.remove('dicedisplay');
    diceImage.src=`dice-${luckyNumbers}.png`;
    // console.log(luckyNumbers);
    if(luckyNumbers != 1){
     score = score + luckyNumbers;
     document.querySelector(`.current--${activePlayer}`).textContent = score;
    }
    else{
        score =0;
        document.querySelector(`.current--${activePlayer}`).textContent = score;
        for(let i=0; i<play.length; i++)
        {
             play[i].classList.remove('activePlay');
        };
        activePlayer = activePlayer === 0 ? 1:0; //ternary operator
    }
    }
    
};

rollDice.addEventListener('click' , rollDiceClick);
//hold button function
holdButton.addEventListener('click' , function(){
    if(playing === true){
    totalScore[activePlayer] = totalScore[activePlayer] + score;
    if(totalScore[activePlayer] >= 100){
        document.querySelector(`.totalscore--${activePlayer}`).textContent ='👏WON';
        playing = false;
    }
    else{
    document.querySelector(`.totalscore--${activePlayer}`).textContent =totalScore[activePlayer];
    }
    score=0;
    document.querySelector(`.current--${activePlayer}`).textContent = score;
    const play = document.getElementsByClassName(`player--${activePlayer}`);//background color change
     for(let i=0; i<play.length; i++)
        {
             play[i].classList.remove('activePlay');
        };
    activePlayer = activePlayer === 0 ? 1:0;//ternery operator
    play = document.getElementsByClassName(`player--${activePlayer}`);//background color change
    for(let i=0; i<play.length; i++)
        {
             play[i].classList.add('activePlay');
        };
    }
});


//new button function
document.querySelector('.new').addEventListener('click', function(){
    diceImage.classList.add('dicedisplay');
    document.querySelector('.current--0').textContent =0;
    document.querySelector('.current--1').textContent =0;
    document.querySelector('.totalscore--0').textContent = 0;
    document.querySelector('.totalscore--1').textContent = 0;
    score = 0;
    totalScore = [0,0];
    const play = document.getElementsByClassName(`player--${activePlayer}`);//background color change
    for(let i=0; i<play.length; i++)
        {
             play[i].classList.remove('activePlay');
        };
    playing = true;
    activePlayer = 0;
   
})
