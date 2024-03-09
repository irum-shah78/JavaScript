// Arrays
const myArr = [10, 20, 30];
console.log(myArr);
console.log(myArr[1]);

myArr[0] = 70;
console.log(myArr);

[1, 'hello world', true, { name: 'irum' }, [1, 2]];
console.log(typeof [1, 2]);
console.log(Array.isArray(myArr));

// Array Methods: Length
console.log(myArr.length);

// push()
myArr.push(40);
console.log(myArr);

// splice()
myArr.splice(0, 1);
console.log(myArr);

// Loops
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNum = 0;
while (randomNum < 0.5) {
  randomNum = Math.random();
  console.log(randomNum);
}

// Looping Through an Array
const todoList = [
  'Wash Dishes',
  'Make Dinner',
  'Watch YT'
];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

// Accumulator Pattern - Example 1: To add all the numbers
const Nums = [1, 2, 3];
let Total = 0;
for (let i = 0; i < Nums.length; i++) {
  const number = Nums[i];
  Total += number;
}
console.log(Total);

// Example 2: Create a Copy of Array with each number Doubled
const Numbers = [1,2,3,4];
const numDouble = [];
for(let i = 0; i < Numbers.length; i++){
const num = Numbers[i];
numDouble.push(num * 2);
}
console.log(numDouble);


// Exercises - 11a
const Numbers1 = [10,20,30];
Numbers1[2] = 99;
console.log(Numbers1);

// 11b
function getLastValue(array){
const lastIndex = array.length - 1;
return array[lastIndex];
}
console.log(getLastValue([10,15,40,5]));
console.log(getLastValue(['Hello', 'World']));

// 11c
function arraySwap(array){
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;
  return array;

  // [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  // return array;
}
console.log(arraySwap(['Hello', 'World']));
console.log(arraySwap([10,20,30,5]));

// 11d
for (let i = 0; i <= 10; i+2){
  console.log(i);
}
