function greeting() {
  console.log('Hello1!');
}
greeting();

// this upper defined function is the shortcut of the following:
// var greeting = function(){
//   console.log('Hello!');
// }

const num = 2;
const function1 = function greetings() {
  console.log('Hello2!');
};
console.log(function1);
console.log(typeof function1);
function1();

// Ctreating Method
const object1 = {
  num: 2,
  func: function greeting(){
    console.log('Hello3!');
  }
};
object1.func();

// Passing a value into a Function
function display(param){
  console.log(param);
}
display(2);

// Function into another function.
function run(param){
param();
}
run(function (){ // this function is called callback function.
  console.log('Hello4!');
})

// setTimeout() built-in function.
setTimeout(function(){
  console.log('Timeout');
}, 3000);

console.log('Next Line.');

setInterval(function(){
  console.log('Interval');
}, 3000);

console.log('Next Line 2');


// Another way to loop through an array. Through forEach() method. 
['Make Dinner', 'Wash Dishes', 'Watch TV'].forEach(function (value, index) {
  if (value === 'Wash Dishes') {
    return;
  }
  console.log(index);
  console.log(value);
});