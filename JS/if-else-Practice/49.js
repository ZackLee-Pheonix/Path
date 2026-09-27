// 49. Проверка правильности введенного номера телефона: Напишите программу,
// которая проверяет, является ли введённый номер телефона правильным.

let phone = prompt("Phone: ")

if (phone.startsWith("+373")) {
    console.log("Correct")
} else {
    console.log("Incorrect")
}