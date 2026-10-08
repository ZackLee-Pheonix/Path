// 38. Написать функцию, которая находит квадрат числа через рекурсию.

function square(n) {
    if (n === 0) {
        return 0
    }

    return square(n - 1) + (2 * n - 1)
}

console.log(square(5)) 