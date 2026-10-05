// 35.Написать цикл, который меняет знак у всех отрицательных чисел в массиве.

let arr = [-1, 1, 2, 4, 5]

for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        arr[i] = Math.abs(arr[i])
    }
}

console.log(arr)