// 18. Используя map, удалите все пробелы в начале и конце каждой строки в
// массиве.
// Пример: [' hello', 'world ', ' JavaScript '] → ['hello', 'world',
// 'JavaScript']

const array = [' hello', 'world ', ' JavaScript ']
const newArr = array.map(str => str.trim())
console.log(newArr)