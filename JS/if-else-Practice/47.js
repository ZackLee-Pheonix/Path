// 47. Определение нужной температуры для воды: Напишите программу, которая
// проверяет, соответствует ли температура воды для купания (например, от 22 до 28
// градусов).

let temperature = prompt("Water temperature: ")

if (temperature >= 22 && temperature <= 28) {
    console.log("Temperature is suitable for swimming")
} else {
    console.log("Temperature is not suitable for swimming")
}