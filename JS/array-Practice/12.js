// 12. Используя filter, оставьте только те строки, которые содержат слово
// "JavaScript".
// Пример: ['Я люблю JavaScript', 'Программирование', 'JavaScript для
// начинающих'] → ['Я люблю JavaScript', 'JavaScript для
// начинающих']

const array = ['Я люблю JavaScript', 'Программирование', 'JavaScript для начинающих']
const newArr = array.filter(str => str.includes("JavaScript"))
console.log(newArr)