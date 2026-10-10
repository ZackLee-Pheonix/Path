// 11. Используя map, создайте новый массив, где каждое слово начинается с
// заглавной буквы.
// Пример: ['hello', 'world'] → ['Hello', 'World']

const array = ['hello', 'world']
const newArr = array.map(str => str = str[0].toUpperCase() + str.slice(1))
console.log(newArr)