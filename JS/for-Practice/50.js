// 50.Написать цикл, который проверяет, является ли массив палиндромом
// (одинаково читается слева направо и справа налево).

let arr = [1, 2, 3, 2, 1]

let palindrome = true

for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        palindrome = false
        break
    }
}

console.log(palindrome)