// 47. Написать функцию, которая реализует подсчёт частоты появления элементов в
// массиве.

function countFrequency(arr) {
    let frequency = {}

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++
        } else {
            frequency[arr[i]] = 1
        }
    }

    return frequency
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]))