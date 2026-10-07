// 25. Написать функцию, которая форматирует дату в строку "YYYY-MM-DD".

function date(a) {
    return `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
}

let date1 = new Date(2009, 5, 27)

console.log(date(date1))