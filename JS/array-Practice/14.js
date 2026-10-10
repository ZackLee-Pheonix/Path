// 14. Используя map, переведите все строки в массиве в верхний регистр.
// Пример: ['apple', 'banana'] → ['APPLE', 'BANANA']

const array = ['apple', 'banana']
const newArr = array.map(str => str.toUpperCase())
console.log(newArr)