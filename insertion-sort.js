function insertionSort(array) {
    const insert = (origin, destination) => {
        array.splice(destination, 0, array.splice(origin, 1)[0]);
    }

    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        while (array[i] < array[j]) j--;
        if (i !== j) insert(i, j + 1);
    }

    return array;
}

insertionSort([5, 3, 2, 4, 1, 6]) // [1, 2, 3, 4, 5]
insertionSort([34, -6, 8.9, 45]) // [-6, 8.9, 34, 45]
insertionSort([-4, -6, -11, 8, 99]) // [-11, -6, -4, 8, 99]