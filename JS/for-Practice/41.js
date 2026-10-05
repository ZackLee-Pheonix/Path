// 41.Написать цикл, который находит сумму всех чисел массива, которые
// больше своего индекса.

let arr = [1, 2, 2, 3, 4, 4, 5]
let sum = 0

for (let i = 0; i < arr.length; i++){
    if(arr[i] > i) {
        sum += arr[i]
    }
}

console.log(sum)