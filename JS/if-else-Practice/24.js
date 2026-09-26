// 24. Генератор случайных чисел: Напишите программу, которая генерирует
// случайное число и сообщает, попадает ли оно в диапазон от 1 до 10.

let number = prompt("Number: ")

if (number >= 1 && number <= 10) {
    console.log("Number is between 1 and 10")
} else {
    console.log("Try again")
}