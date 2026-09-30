// 11.Написать цикл, который находит сумму всех элементов в массиве.

let sum = 0
let arr = [1, 2, 3, 5]

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum)