// 35. Определение времени задержки в транзакции: Напишите программу, которая
// выводит сообщение о том, задерживается ли транзакция больше чем на 5 секунд.

let isDelayed = prompt("Yes or No: ")

if (isDelayed === "Yes") {
    console.log("Wait 5 seconds ...")
} else if (isDelayed === "No") {
    console.log("Delivered")
}