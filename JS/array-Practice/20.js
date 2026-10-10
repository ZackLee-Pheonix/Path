// 20. Используя map, сделайте все строки в массиве в нижнем регистре.
// Пример: ['HELLO', 'WORLD'] → ['hello', 'world']

const array = ['HELLO', 'WORLD']
const newArr = array.map(str => str.toLowerCase())
console.log(newArr)