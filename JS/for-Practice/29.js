// 29.Написать цикл, который заменяет все элементы массива на их квадраты,
// если число больше 10.

let arr = [1, 2, 4, 5, 18]

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 10) {
        arr[i] = Math.pow(arr[i], 2)
    }
}

console.log(arr)