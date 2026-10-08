// 33. Написать функцию, которая находит наибольший общий делитель двух чисел.

function gcd(a, b) {
    while (b !== 0) {
        let temp = a
        a = b
        b = temp % b
    }

    return a
}

console.log(gcd(24, 36)) 