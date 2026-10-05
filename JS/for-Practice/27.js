// 27.Написать цикл, который удаляет все элементы массива, меньшие 5.

let arr = [1, 2, 4, 5, 6]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
        arr.splice(i, 1)
        i--
    }
}

console.log(arr) 