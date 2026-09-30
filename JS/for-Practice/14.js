// 14.Написать цикл, который находит минимальное число в массиве.

let min = 1
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}

console.log(min)