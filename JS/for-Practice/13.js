// 13.Написать цикл, который находит максимальное число в массиве.

let max = 0
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(max)

