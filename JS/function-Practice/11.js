// 11. Написать функцию, которая проверяет, является ли строка палиндромом.

function palindrome(a) {
    let palindrome = true
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            palindrome = false
            break
        }
    }
    return palindrome
}

let str = "12321"

console.log(palindrome(str))