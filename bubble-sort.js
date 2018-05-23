function bubbleSort(array) {
  const swap = i => {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  };

  let maxComparison = array.length - 1;
  let sorted = false;

  while (sorted === false && maxComparison > 0) {
    let changed = false;
    for (let i = 0; i < maxComparison; i++) {
      if (array[i] > array[i + 1]) {
        swap(i);
        changed = true;
      }
    }

    if (!changed) sorted = true;
    maxComparison--;
  }

  return array;
}

bubbleSort([5, 3, 2, 4, 1]); // [1, 2, 3, 4, 5]
bubbleSort([34, -6, 8.9, 45]); // [-6, 8.9, 34, 45]
bubbleSort([-4, -6, -11, 8, 99]); // [-11, -6, -4, 8, 99]
