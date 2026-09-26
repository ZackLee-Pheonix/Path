// 30. Проверка баланса счета в банке: Напишите программу, которая проверяет,
// может ли пользователь совершить транзакцию, исходя из его текущего баланса.

let check = prompt("Check: ")
let total = 1000

if (check >= total) {
    console.log("Cant pay")
} else {
    console.log("Can pay")
}