// 21. Нахождение максимального числа: Напишите программу, которая находит
// максимальное число из трех введённых чисел.

let num1 = prompt("Number 1: ")
let num2 = prompt("Number 2: ")
let num3 = prompt("Number 3: ")

if (num1 >= num2 && num1 >= num3) {
    console.log(num1)
} else if (num2 >= num1 && num2 >= num3){
    console.log(num2)
} else {
    console.log(num3)
}