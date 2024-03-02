// Coin-flip-game Exercise 6f-6j
let coin = Math.random();
let result;
if(coin < 0.5){
  result = 'Heads';
} else {
 result = 'Tails';
}

let guess = 'Tails'; // guess = 'Heads';
if(guess === result){
  console.log('You win!');
} else {
  console.log('You lose!');
}

// Ternary Operators
const coin1 = Math.random();
const result1 = coin1 < 0.5 ? 'Heads' : 'Tails';
console.log(result1);

const guess1 = 'Tails';
const result3 = guess1 == result1 ? 'You Win!' : 'You Lose!';
console.log(result3);