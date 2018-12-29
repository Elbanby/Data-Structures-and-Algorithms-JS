function quickSort(arr, li = 0, ri = arr.length - 1) {
  if (li > ri) return arr;

  let pivot = ri,
    partitionIndex = partition(arr, pivot, li, ri);

  quickSort(arr, li, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, ri);

  return arr;
}

function partition(arr, pivot, li, ri) {
  let partitionIndex = li;

  for (let i = li; i < ri; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}

function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}
