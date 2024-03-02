console.log(document.querySelector('button'));
// console.log(document.querySelector('body'));
console.log(document.querySelector('button').innerHTML);
document.querySelector('button').innerHTML = 'Changed!';

//console.log(document.querySelector('.js-btn'));
const btnElement = document.querySelector('.js-btn');
console.log(btnElement);

// Properties of DOM
/* console.log(document.title);
 document.title = 'Changed';

 console.log(document.body);
 console.log(typeof document.body);

 console.log(document.body.innerHTML);
 document.body.innerHTML = 'Changed!';

 // we can also write the HTML Code in it:
 document.body.innerHTML = '<button> Good Job! </button>'

 // document.body.innerHTML = 'Hello';
 // document.title = 'Good Job!';
*/



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

// Exercise 9g- convert the number into Cents and then convert back into Dollars.
function exCost(event){
  if(event.key === 'Enter'){
    exTotal();
  }
}
function exTotal(){
const exElement = document.querySelector('.js-input-ex');
let costTotal = Number(exElement.value) * 100;

if(costTotal < 4000){
  costTotal = costTotal + 1000;
}
document.querySelector('.js-cost-ex').innerHTML = `$${costTotal / 100}`;
}

// Exercise 9h
function checkKeyUp(){
  const keyElement = document.querySelector('.ex-keyup');
  document.querySelector('.ex-text').innerHTML = keyElement.value;
}