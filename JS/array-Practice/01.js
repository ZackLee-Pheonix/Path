// 1. Используя map, удвойте все числа в массиве.
// Пример: [1, 2, 3, 4] → [2, 4, 6, 8]

const array = [1, 2, 3, 4];
const newArr = array.map(number => number *= 2)
console.log(newArr)