function playGame(playerMove) {
  const compMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (compMove === 'Scissors') {
      result = 'Tie.'
    } else if (compMove === 'Rock') {
      result = 'You lose';
    } else if (compMove === 'Paper') {
      result = 'You win.';
    }

  } else if (playerMove === 'Paper') {
    if (compMove === 'Paper') {
      result = 'Tie.'
    } else if (compMove === 'Scissors') {
      result = 'You lose';
    } else if (compMove === 'Rock') {
      result = 'You win.';
    }

  } else if (playerMove === 'Rock') {
    let result = '';
    if (compMove === 'Rock') {
      result = 'Tie.'
    } else if (compMove === 'Paper') {
      result = 'You lose';
    } else if (compMove === 'Scissors') {
      result = 'You win.';
    }

  }
  // Show result in pop-up.
  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`);
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