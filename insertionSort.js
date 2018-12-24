function insertionSort(array) {
  if (array.length === 1) return array;
  //Starting left to right
  for (let i = 1 ; i < array.length ; i++) {
    //Checking the item to the left
    for (let j = i - 1 ; j >= 0 ; j--) {
      //Chcehk if it is smaller to the item to its left
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        //You decrement i is a must so you compare the new index you moved
        i--;
      } else {
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort([0]));
console.log(insertionSort([0, -1]));
console.log(insertionSort([0, -1, 2]));
console.log(insertionSort([10,0, 5, 1, 4, 2]));
