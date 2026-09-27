// 33. Вывод числа в разных системах счисления: Напишите программу, которая
// выводит число в двоичной, восьмеричной и десятичной системах счисления.

let number = prompt("Number: ")
let system = prompt("Choose system (2, 8, 10): ")

if (system === 2) {
    console.log(number.toString(2))
} else if (system === 8) {
    console.log(number.toString(8))
} else if (system === 10) {
    console.log(number.toString(10))
}