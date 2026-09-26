// 7. Простой калькулятор: Напишите программу, которая выполняет сложение,
// вычитание, умножение или деление в зависимости от введенного пользователем
// знака.

let number1 = prompt("Number 1: ")
let number2 = prompt("Number 2: ")
let symbol = prompt("Symbol: ")

if (symbol === "+") {
    console.log(number1 + number2) 
} else if (symbol === "-") {
    console.log(number1 - number2) 
} else if (symbol === "*") {
    console.log(number1 * number2) 
} else if (symbol === "/") {
    console.log(number1 / number2) 
}
