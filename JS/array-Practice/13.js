// 13. Используя forEach, выведите длину каждой строки в массиве.
// Пример: ['apple', 'banana', 'cherry'] → 5, 6, 6

const array = ['apple', 'banana', 'cherry']
const newArr = array.map(str => str.length)
console.log(newArr)