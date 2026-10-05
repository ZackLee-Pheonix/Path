// 36.Написать цикл, который выводит элементы массива, которые больше
// среднего значения всех элементов массива.

let arr = [1, 2, 4, 5]
let sum = 0

for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}

let med = sum / arr.length

for (let i = 0; i < arr.length; i++){
    if (arr[i] > med) {
        console.log(arr[i])
    }
}