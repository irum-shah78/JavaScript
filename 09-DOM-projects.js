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

// Excersie 9a-9b
console.log(document.querySelector('.exercise-btn'));

function exerciseBtn(){
const exBtn =  document.querySelector('.exercise-btn2');
if(exBtn.innerText === '9b'){
exBtn.innerHTML = '9b Done!';
} else {
  exBtn.innerHTML = '9b';
}
}

// Exercise 9d-9e-9f
function nameButton(){
  const inputName = document.querySelector('.exercise-input');
  document.querySelector('.name').innerHTML = `You Name is: ${inputName.value}`;
}

function showName(event){
  if(event.key === 'Enter'){
    nameButton();
  }
}