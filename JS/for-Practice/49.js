// 49.Написать цикл, который находит второе по величине число в массиве.

let arr = [5, 2, 8, 1, 4]

let max = arr[0]
let secondMax = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max
        max = arr[i]
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i]
    }
}

console.log(secondMax)