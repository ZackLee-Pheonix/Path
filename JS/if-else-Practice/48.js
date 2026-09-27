// 48. Оценка стоимости недвижимости: Напишите программу, которая оценивает
// стоимость недвижимости в зависимости от её характеристик (например,
// количество комнат, этаж, район).

let rooms = prompt("Number of rooms: ")
let floor = prompt("Floor: ")
let district = prompt("District: ")

let price = 50000

if (rooms >= 3 && floor <= 5 && district === "Center") {
    price += 30000
} else if (rooms >= 2 && district === "Center") {
    price += 20000
} else if (rooms >= 2) {
    price += 10000
} else {
    price += 5000
}

console.log(`Price: ${price}€`)