// 15.Написать цикл, который находит среднее арифметическое чисел в массиве.

let sum = 0
let arr = [1, 2, 3, 5]

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

let medie = sum / arr.length
console.log(medie)