// Fibonacci series

var num = prompt("Enter number:");
let n1=0, n2=1, series;
console.log('Fibonacci series:');
for(let i=1; i<=num; i++){
    console.log(n1);
    series= n1+n2;
    n1= n2;
    n2= series;
}


// Factorial

var num= prompt("enter number:");
if(num<0){
    console.log('Factorial does not exist.');
} else 
if(num == 0){
    console.log('factorial is 1.');
}else {
     let fact=1;
    for( i=1; i<=num; i++){
        fact *=i;
    }
    console.log("Factorial is:"+ fact);
  }


// Remove all occurences

let dStr= 'JavaScript is a popular language.';
dStr = dStr.replace('a', '');
console.log(dStr);


// Reverse String

let string= 'World';
string = string.split('').reverse('').join('');
console.log(string);



// Getter and Setter

var person={
    fName: 'abc',
    lName: 'xyz',
    age: 20,
    
    get fullName(){
        return this.fName +this.lName ;
    },
    set setName(n){
        this.fName = (n);
        this.lName = (n);
    }
};
console.log(person.fullName);
person.n='www qqq'
console.log(person.n);


// First Repeating Character

let str = "hello world";
let charM = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charM[char]) {
    console.log(char);
    break;
  } else {
    charM[char] = true;
  }
}



// Given Number integer or not

let num = prompt('Enter number:');
if (num % 1 === 0) {
  console.log(num + " is an integer");
} else {
  console.log(num + " is not an integer");
}


// Function Call with parameters

function add(num) {
  return num + num;
}

function square(back, num) {
  return back(num) * num;
}

let result = square(add, 3);
console.log(result);
