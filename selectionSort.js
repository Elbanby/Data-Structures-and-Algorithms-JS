function selectionSort(arr) {
  if (arr.length === 1) return arr;
  let currMin, minIndex, temp;
  for (let i = 0; i < arr.length; i++) {
    currMin = arr[i];
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (currMin > arr[j]) {
        currMin = arr[j];
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = currMin;
    arr[minIndex] = temp;
  }
  return arr;
}
