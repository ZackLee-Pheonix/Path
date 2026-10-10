// 7. Используя forEach, создайте новую строку, соединяя все элементы массива
// через пробел.
// Пример: ['Я', 'люблю', 'JavaScript'] → 'Я люблю JavaScript'

const array = ['Я', 'люблю', 'JavaScript']
let newStr = ""
array.forEach(str => newStr += str + " ")
console.log(newStr)