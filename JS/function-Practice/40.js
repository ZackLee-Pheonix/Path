// 40. Написать функцию, которая находит сумму всех чётных чисел в диапазоне от 1 до
// N.

function sumEven(n) {
    let sum = 0

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }

    return sum
}

console.log(sumEven(10)) 