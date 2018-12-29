function insertionSort(arr) {
  if (arr.length === 1) return arr;
  for (let i = 1 ; i < arr.length ; i++) {
    for (let j = i - 1 ; j >= 0 ; j--) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i--;
      } else {
        break;
      }
    }
  }
  return arr;
}
