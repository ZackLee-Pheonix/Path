// 45.Написать цикл, который создает новый массив, в котором элементы
// исходного массива идут в обратном порядке.

let arr = [1, 2, 3, 4, 5]
let newArr = []

for (let i = 0; i < arr.length; i++){
    newArr[i] = arr[arr.length - i - 1]
}

console.log(newArr)