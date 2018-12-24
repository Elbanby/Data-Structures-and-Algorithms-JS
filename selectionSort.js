function selectionSort(array) {
  if (array.length === 1) return array;
  let currMin, minIndex, temp;
  for (let i = 0; i < array.length; i++) {
    currMin = array[i];
    minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (currMin > array[j]) {
        currMin = array[j];
        minIndex = j;
      }
    }
    temp = array[i];
    array[i] = currMin;
    array[minIndex] = temp;
  }
  return array;
}
