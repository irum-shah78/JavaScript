//let calculation = '';
let calculation = localStorage.getItem('calculation') || '';
showCalculation();

function updateCalculation(value) {
  calculation += value;
  showCalculation()
  localStorage.setItem('calculation', calculation);
}

function saveCalculation(){
  localStorage.setItem('calculation', calculation);
}

function showCalculation(){
  document.querySelector('.results').innerHTML = calculation;
}