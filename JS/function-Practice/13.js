// 13. Написать функцию, которая проверяет, есть ли элемент в массиве.

function isIn(arr, a){
    return arr.includes(a)
}

const array = [1, 2, 3]

console.log(isIn(array, 4))