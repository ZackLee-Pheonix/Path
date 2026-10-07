// 28. Написать функцию, которая проверяет, является ли объект массивом.

function isArray(a) {
    return Array.isArray(a)
}

const arr = [1, 2, 3]

console.log(isArray(arr))