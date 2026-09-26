// 20. Проверка на ошибки в форме: Напишите программу, которая проверяет
// правильность ввода в форме (например, правильность email).

let email = prompt("Email: ")

if (email.endsWith("@gmail.com")) {
    console.log("All good")
} else {
    console.log("Bad Form")
}