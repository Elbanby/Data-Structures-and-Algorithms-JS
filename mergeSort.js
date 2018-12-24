function mergeSort(array) {
  if (array.length <= 1) return array;
  let leftArray = array.slice(0, array.length/2);
  let rightArray = array.slice(array.length/2, array.length+1);
  let lSorted = mergeSort(leftArray);
  let rSorted = mergeSort(rightArray);
  return merge(lSorted,rSorted);
}

function merge(lArray, rArray) {
  let sortedArray = [], lPtr = 0, rPtr = 0;

  while (sortedArray.length < (lArray.length + rArray.length)) {
    if (lPtr === lArray.length)
     sortedArray = sortedArray.concat(rArray.slice(rPtr));
    else if (rPtr === rArray.length)
      sortedArray = sortedArray.concat(lArray.slice(lPtr));
    else if (lArray[lPtr] <= rArray[rPtr])
        sortedArray.push(lArray[lPtr++]);
    else
        sortedArray.push(rArray[rPtr++]);
  }
  return sortedArray
}
