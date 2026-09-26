// 4. Проверка пароля: Напишите программу, которая проверяет, совпадает ли
// введённый пользователем пароль с заданным.

let password = prompt("Password: ")
let confirmPassword = prompt("Confirm Password: ")

if (password !== confirmPassword) {
    console.log("Try again")
} else {
    console.log("Good job")
}