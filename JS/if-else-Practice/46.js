// 46. Рассчёт времени работы сотрудников: Напишите программу, которая вычисляет,
// сколько времени сотрудник отработал в день, в зависимости от времени прихода и
// ухода.

let start = prompt("Arrival time: ")
let end = prompt("Leaving time: ")

let hours = end - start

if (hours >= 8) {
    console.log(`Worked: ${hours} hours`)
} else {
    console.log(`Worked: ${hours} hours`)
}