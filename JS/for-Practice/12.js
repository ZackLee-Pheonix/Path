// 12.Написать цикл, который находит произведение всех элементов в массиве.

let produs = 1
let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    produs *= arr[i]
}

console.log(produs)