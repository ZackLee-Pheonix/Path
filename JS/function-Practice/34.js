// 34. Написать функцию, которая проверяет, является ли число простым.


function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrime(7))