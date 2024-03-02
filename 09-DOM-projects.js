// Amazon Shipping Calculator
function handleCost(event){
  if(event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
const inputElement = document.querySelector('.js-input');
let cost = Number(inputElement.value);

if(cost < 40){
  cost = cost + 10;
}
document.querySelector('.js-cost').innerHTML = `$${cost}`;
}

// YT Subscribe Button Project
function subscribeBtn() {
  const btnElement = document.querySelector('.js-btn');
  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
  } else {
    btnElement.innerHTML = 'Subscribe';
  }
}