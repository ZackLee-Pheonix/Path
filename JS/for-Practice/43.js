// 43.Написать цикл, который меняет местами два произвольных элемента
// массива.

let arr = [1, 2, 3, 4, 5]

let a = 1
let b = 3

for (let i = 0; i < arr.length; i++) {
    if (i === a) {
        let temp = arr[i]
        arr[i] = arr[b]
        arr[b] = temp
        break
    }
}

console.log(arr)