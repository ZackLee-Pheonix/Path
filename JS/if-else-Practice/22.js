// 22. Проверка правильности введённого адреса: Напишите программу, которая
// проверяет, соответствует ли введённый адрес правильному формату.

let address = prompt("Address: ")

if (address.includes(" ")) {
    console.log("Correct address")
} else {
    console.log("Incorrect address")
}