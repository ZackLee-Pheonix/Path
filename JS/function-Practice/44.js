// 44. Написать функцию, которая находит наименьшее общее кратное двух чисел.

function lcm(a, b) {
    let x = a
    let y = b

    while (y !== 0) {
        let temp = x
        x = y
        y = temp % y
    }

    return Math.abs(a * b) / x
}

console.log(lcm(12, 18)) 