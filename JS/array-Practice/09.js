// 9. Используя map, увеличьте все числа на 10.
// Пример: [1, 2, 3, 4] → [11, 12, 13, 14]

const array = [1, 2, 3, 4]
const newArr = array.map(number => number += 10)
console.log(newArr)