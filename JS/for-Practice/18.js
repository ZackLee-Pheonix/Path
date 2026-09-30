// 18.Написать цикл, который находит сумму всех чисел в массиве, делящихся на
// 3.

let sum = 0
let arr = [1, 2, 3, 5]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        sum += arr[i]
    }
}

console.log(sum)