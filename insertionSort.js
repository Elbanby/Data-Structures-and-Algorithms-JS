function insertionSort(array) {
  if (array.length === 1) return array;
  for (let i = 1 ; i < array.length ; i++) {
    for (let j = i - 1 ; j >= 0 ; j--) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i--;
      } else {
        break;
      }
    }
  }
  return array;
}
