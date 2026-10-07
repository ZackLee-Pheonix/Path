// 21. Написать функцию, которая проверяет, является ли объект пустым.

function empty(a) {
    return Object.keys(a).length === 0
}

const obj = {}

console.log(empty(obj))