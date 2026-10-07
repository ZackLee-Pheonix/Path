// 24. Написать функцию, которая вычисляет разницу между двумя датами в днях.

function date(a, b) {
    let difference = a.getTime() - b.getTime()

    return difference / (1000 * 60 * 60 * 24)
}

let date1 = new Date()
let date2 = new Date(2009, 5, 27)

console.log(date(date1, date2))