// 16. Проверка баланса счета: Напишите программу, которая проверяет, достаточно ли
// средств на счету пользователя для проведения транзакции.

let total = prompt("Total: ")
let check = prompt("Check: ")

if (total >= check) {
    console.log("Yes")
} else {
    console.log("No")
}