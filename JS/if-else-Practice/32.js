// 32. Проверка валидности PIN-кода: Напишите программу, которая проверяет,
// правильный ли PIN-код был введен пользователем.

let pincode = prompt("PinCode: ")
let correctPincode = 123

if (pincode === correctPincode) {
    console.log("Correct")
} else {
    console.log("Incorrect")
}