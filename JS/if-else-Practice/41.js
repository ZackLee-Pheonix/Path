// 41. Оценка работы сотрудников: Напишите программу, которая классифицирует
// работу сотрудников по оценке ("Отлично", "Хорошо", "Нужно улучшить").

let work = prompt("How long did you work: ")

if (work < 6 && work >= 1) {
    console.log("Нужно улучшить")
} else if (work >= 6 && work < 8) {
    console.log("Хорошо")
} else if (work >=8) {
    console.log("Отлично")
}