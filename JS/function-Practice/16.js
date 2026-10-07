// 16. Написать функцию, которая находит индекс максимального элемента в массиве.

function index(a) {
    let index = 0

    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[index]) {
            index = i
        }

    }
    return index
}

const array = [1, 2, 8, 0, 7]

console.log(index(array))