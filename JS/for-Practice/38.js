// 38.Написать цикл, который создает новый массив, содержащий только
// уникальные элементы из исходного массива.

let arr = [1, 2, 2, 3, 4, 4, 5]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}

console.log(newArr)