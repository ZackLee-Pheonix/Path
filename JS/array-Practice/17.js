// 17. Используя forEach, создайте новую строку, объединяя все строки массива
// через дефис.
// Пример: ['Привет', 'мир', 'JavaScript'] → 'Привет-мир-JavaScript'

const array = ['Привет', 'мир', 'JavaScript']
let newstr = ""

array.forEach(str => {
    if (newstr !== "") {
        newstr += "-"
    }
    newstr += str
})

console.log(newstr)