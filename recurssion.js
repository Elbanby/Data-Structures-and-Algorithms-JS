//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function wrapper_ex1(n){
  let num = n;
  while (num !== 0) {
    console.log('n is now: ' + num);
    num--;
  }
}

// wrapper_ex1(4);

//2. Next, try looping just like above except using recursion
function loop(n) {
  if (n === 0) return
  console.log('n is now: ' + n);
  return loop(n-1);
}

// loop(4);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function wrapper_ex2(base, expo) {
  let exponent = 1;
  while (expo) {
    exponent *= base;
    expo--;
  }
  console.log(exponent);
}

// wrapper_ex2(2,4);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function exponent(base, expo) {
  if (expo === 1 || expo === 0) return base
  return base *= exponent(base, expo-1);
}

 // console.log(exponent(2,4));


//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
//Map!!

function test() {
// [2,3,4,5] --> [4,6,8,10]
  let newArray = [];
  let array = [2,3,4,5];
  let num = 2;
  for (let i = 0 ; i < array.length ; i++) {
    console.log(i, array.length);
    newArray[i] = (num * array[i])
  }
  console.log(newArray);
}
//test();

// recursiveMultiplier([2,3,4],2);

function wrapperRecMult(arr, num) {
  let multipliesArray = [];
  let index = 0;

  let recursiveMultiplier = function() {
    if (arr.length === 0) return multipliesArray;
    if ( arr.length  === index + 1) return multipliesArray.push(arr[index] * num);
    multipliesArray.push(arr[index++] * num);
    return recursiveMultiplier();
  }

  recursiveMultiplier();
  return multipliesArray;
}

console.log(wrapperRecMult([2,3,4],21));


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function wrapperRecursiveReverse(array) {
  let reversedArray = [];

  let recursiveReverse = function() {
    if (array.length === 0) return;
    reversedArray.push(array.pop());
    return recursiveReverse();
  }

  recursiveReverse();
  return reversedArray;
}

//console.log(wrapperRecursiveReverse([1,2,10,3,4]));
