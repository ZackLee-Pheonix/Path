// 44. Проверка на доступность услуги: Напишите программу, которая проверяет,
// доступна ли услуга (например, доставка) в зависимости от местоположения.

let location = prompt("Where do you live? ")

if (location === "Chisinau") {
    console.log("Delivery is available")
} else {
    console.log("Delivery is not available")
}