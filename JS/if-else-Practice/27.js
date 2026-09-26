// 27. Проверка правильности даты рождения: Напишите программу, которая
// проверяет, является ли введённая дата рождения корректной.

let date = prompt("Date: ")

if (date.endsWith("2026") && date.includes(".")) {
    console.log("Correct")
} else {
    console.log("Incorrect")
}