let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();

/*
  if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const compMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (compMove === 'Scissors') {
      result = 'Tie.'
    } else if (compMove === 'Rock') {
      result = 'You lose.';
    } else if (compMove === 'Paper') {
      result = 'You win.';
    }

  } else if (playerMove === 'Paper') {
    if (compMove === 'Paper') {
      result = 'Tie.'
    } else if (compMove === 'Scissors') {
      result = 'You lose.';
    } else if (compMove === 'Rock') {
      result = 'You win.';
    }

  } else if (playerMove === 'Rock') {
    if (compMove === 'Rock') {
      result = 'Tie.'
    } else if (compMove === 'Paper') {
      result = 'You lose.';
    } else if (compMove === 'Scissors') {
      result = 'You win.';
    }

  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.loses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="Assets/${playerMove}-emoji.png" class="game-icon"> - <img src="Assets/${compMove}-emoji.png"
  class="game-icon"> Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  // Select a random number
  const randomNum1 = Math.random();
  let compMove = '';
  if (randomNum1 >= 0 && randomNum1 < 1 / 3) {
    compMove = 'Rock';
  } else if (randomNum1 >= 1 / 3 && randomNum1 < 2 / 3) {
    compMove = 'Paper';
  } else if (randomNum1 >= 2 / 3 && randomNum1 < 1) {
    compMove = 'Scissors';
  }
  return compMove;
}