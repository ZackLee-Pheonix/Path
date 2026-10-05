// 42.Написать цикл, который создает новый массив, где каждый элемент - это
// разница между максимальным и минимальным элементами исходного
// массива.

let arr = [1, 2, 5, 3, 4]
let max = arr[0]
let min = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }

    if (arr[i] < min) {
        min = arr[i]
    }
}

let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(max - min)
}

console.log(newArr)