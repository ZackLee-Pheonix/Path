// 6. Проверка на максимальную скорость: Напишите программу, которая проверяет,
// не превышает ли скорость водителя максимально допустимую скорость (например,
// 60 км/ч).

let speed = 60
let yourSpeed = prompt("Speed: ")

if (yourSpeed > speed) {
    console.log("Drive slower")
} else {
    console.log("Good job")
}