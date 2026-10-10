// 2. Используя filter, оставьте только четные числа из массива.
// Пример: [1, 2, 3, 4, 5] → [2, 4]


const array = [1, 2, 3, 4, 5]
const newArr = array.filter(number => number % 2 === 0)
console.log(newArr)