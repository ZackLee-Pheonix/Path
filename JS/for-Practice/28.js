// 28.Написать цикл, который добавляет 5 ко всем четным числам в массиве.

let arr = [1, 2, 4, 5]

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        arr[i] += 5
    }
}

console.log(arr)