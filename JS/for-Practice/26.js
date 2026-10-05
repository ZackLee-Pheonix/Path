// 26.Написать цикл, который меняет местами первые и последние элементы
// массива.

let a = 0
let arr = [1, 2, 3, 5]

for (let i = 0; i < arr.length / 2; i++) {
    a = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = a
}

console.log(arr)