// /*
// // Arrays
// const myArr = [10, 20, 30];
// console.log(myArr);
// console.log(myArr[1]);

// myArr[0] = 70;
// console.log(myArr);

// [1, 'hello world', true, { name: 'irum' }, [1, 2]];
// console.log(typeof [1, 2]);
// console.log(Array.isArray(myArr));

// // Array Methods: Length
// console.log(myArr.length);

// // push()
// myArr.push(40);
// console.log(myArr);

// // splice()
// myArr.splice(0, 1);
// console.log(myArr);

// // Loops
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let randomNum = 0;
// while (randomNum < 0.5) {
//   randomNum = Math.random();
//   console.log(randomNum);
// }

// // Looping Through an Array
// const todoList = [
//   'Wash Dishes',
//   'Make Dinner',
//   'Watch YT'
// ];

// for (let i = 0; i < todoList.length; i++) {
//   const value = todoList[i];
//   console.log(value);
// }

// // Accumulator Pattern - Example 1: To add all the numbers
// const Nums = [1, 2, 3];
// let Total = 0;
// for (let i = 0; i < Nums.length; i++) {
//   const number = Nums[i];
//   Total += number;
// }
// console.log(Total);

// // Example 2: Create a Copy of Array with each number Doubled
// const Numbers = [1,2,3,4];
// const numDouble = [];
// for(let i = 0; i < Numbers.length; i++){
// const num = Numbers[i];
// numDouble.push(num * 2);
// }
// console.log(numDouble);
// */


// // Part 1 - Exercises: 11a
// const Numbers1 = [10, 20, 30];
// Numbers1[2] = 99;
// console.log(Numbers1);

// // 11b
// function getLastValue(array) {
//   const lastIndex = array.length - 1;
//   return array[lastIndex];
// }
// console.log(getLastValue([10, 15, 40, 5]));
// console.log(getLastValue(['Hello', 'World']));

// // 11c
// function arraySwap(array) {
//   const lastIndex = array.length - 1;
//   const lastValue = array[lastIndex];
//   const firstValue = array[0];

//   array[0] = lastValue;
//   array[lastIndex] = firstValue;
//   return array;

//   // [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
//   // return array;
// }
// console.log(arraySwap(['Hello', 'World']));
// console.log(arraySwap([10, 20, 30, 5]));

// // 11d
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// // 11e
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// // 11f: 11d - 11e using while loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// let ind = 5;
// while (ind >= 0) {
//   console.log(ind);
//   ind--;
// }

// // 11g
// const array = [1, 2, 3, 4];
// let addOne = [];
// for (let i = 0; i < array.length; i++) {
//   addOne.push(array[i] + 1);
// }
// console.log(addOne);

// // 11h
// function addOnee(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + 1);
//   }
//   return result;
// }
// console.log(addOnee([1, 2, 3]));
// console.log(addOnee([-2, -1, 0, 99]));

// // 11i
// function addNum(array, num) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + num);
//   }
//   return result;
// }
// console.log(addNum([1, 2, 3], 2));
// console.log(addNum([1, 2, 3], 3));
// console.log(addNum([-2, -1, 0, 99], 2));

// // 11j
// function addArrays(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     result.push(array1[i] + array2[i]);
//   }
//   return result;
// }
// console.log(addArrays([1, 1, 2], [1, 1, 3]));

// // 11h
// function countPositive(nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(countPositive([1, -3, 5]));
// console.log(countPositive([1, 2, -4, -4, 5]));

// // 11l - 11m
// function minMax(nums) {
//   const result = {
//     min: null,
//     max: null
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];

//     if (result.min === null || value < result.min) {
//       result.min = value;
//     }
//     if (result.max === null || value > result.max) {
//       result.max = value;
//     }
//   }
//   return result;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 7, 10]));
// console.log(minMax([]));
// console.log(minMax([3, 3]));

// // 11n
// function countWords(words) {
//   const result = {};

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (!result[word]) {
//       result[word] = 1;
//     } else {
//       result[word]++;
//     }
//   }
//   return result;
// }
// console.log(countWords(['apple', 'banana', 'orange', 'banana', 'apple', 'mango']));


// // Part 2 - Details about Arrays.
// const array1 = [1, 2, 3];
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

// const [firstValue, secondValue] = [1, 2, 3];

// for (let i = 0; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
//   if (i === 8) {
//     break;
//   }
// }


// let index = 0;
// while (index <= 10) {
//   if (index % 3 === 0) {
//     index++;
//     continue;
//   }
//   console.log(index);
//   index++;
// }

// function doubleArray(Numbers) {
//   const numDouble = [];
//   for (let i = 0; i < Numbers.length; i++) {
//     const num = Numbers[i];
//     if (num === 0) {
//       return numDouble;
//     }
//     numDouble.push(num * 2);
//   }
//   return numDouble;
// }
// console.log(doubleArray([5, 6, 7, 0, 9]));
// console.log(doubleArray([1, 2, 3]));


// Part 2 - Exercises: 11o - 11p
let words1 = ['Hello', 'World', 'search', 'good', 'search'];
let index = -1;

for (let i = 0; i < words1.length; i++) {
  if (words1[i] === 'search') {
    index = i;
    break;
  }
}
console.log(index);

words1 = ['Not', 'Found'];
index = -1;

for (let i = 0; i < words1.length; i++) {
  if (words1[i] === 'search') {
    index = i;
    break;
  }
}
console.log(index);

// 11q
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(['green', 'red', 'blue'], 'red'));
console.log(findIndex(['green', 'red', 'blue'], 'yellow'));

// 11r - 11s
function removeEgg(foods) {
  const result2 = [];
  let eggRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'Egg' && eggRemoved < 2) {
      eggRemoved++;
      continue;
    }
    result2.push(foods[i]);
  }
  return result2;
}
console.log(removeEgg(['Egg', 'Apple', 'Egg', 'Egg', 'Ham']));

// 11t - 11u
function removeeEgg(foods) {
  const newFoods = foods.slice();
  const reverseFoods = foods.reverse();
  const result2 = [];
  let eggRemoved = 0;

  for (let i = 0; i < reverseFoods.length; i++) {
    if (reverseFoods[i] === 'Egg' && eggRemoved < 2) {
      eggRemoved++;
      continue;
    }
    result2.push(reverseFoods[i]);
  }
  return result2.reverse();
}
// console.log(removeeEgg(['Egg', 'Apple', 'Egg', 'Egg', 'Ham']));
const foods = ['Egg', 'Apple', 'Egg', 'Egg', 'Ham'];
console.log(removeeEgg(foods));
console.log(foods);

// 11v
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 11w
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == word) {
      return i;
    }
  }
  return -1;
}

function unique(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(newArr, word) === -1) {
      newArr.push(word);
    }
  }
  return newArr;
}
console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['green', 'green', 'red', 'blue']));
