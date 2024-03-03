// 10c
const Test = document.querySelector('.js-btn');
console.log(Test.classList.contains('js-btn'));

// 10d-10e-10f-10g
function addClass(selector) {
  const btnElement = document.querySelector(selector);
  if (!btnElement.classList.contains('is-toggled')) {
    offPrevious();
    btnElement.classList.add('is-toggled');
  } else {
    btnElement.classList.remove('is-toggled');
  }
}

function offPrevious() {
  const previousBtn = document.querySelector('.is-toggled');
  if (previousBtn) {
    previousBtn.classList.remove('is-toggled');
  }
}

// 10h
function handleCost(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-input');
  // let cost = Number(inputElement.value) * 100;
  let cost = Number(inputElement.value);

  document.querySelector('.js-cost').innerHTML = '';
  document.querySelector('.js-err-msg').innerHTML = '';

  if(cost < 0){
    document.querySelector('.js-err-msg').innerHTML = `Error: Cost can't be less than $0`; 
    return;
  }

  if (cost < 40) {
    cost = cost + 10;
  }
  document.querySelector('.js-cost').innerHTML = `$${cost}`;
  // document.querySelector('.js-cost').innerHTML = `$${cost / 100}`;
}