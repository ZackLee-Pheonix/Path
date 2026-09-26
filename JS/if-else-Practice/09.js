// 9. Проверка числа в массиве: Напишите программу, которая проверяет,
// присутствует ли заданное число в массиве.

let number = promt("Number: ")
let massive = [1, 2, 3, 4, 5]

if (massive.includes(number)) {
    console.log("Includes")
} else {
    console.log("No")
}