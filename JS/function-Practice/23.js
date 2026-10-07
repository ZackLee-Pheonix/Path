// 23. Написать функцию, которая возвращает текущую дату в формате "день-месяц-год".

function date(a) {
    return `${a.getDate()}-${a.getMonth() + 1}-${a.getFullYear()}`
}

let b = new Date()

console.log(date(b))