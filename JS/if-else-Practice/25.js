// 25. Проверка наличия товара на складе: Напишите программу, которая проверяет,
// есть ли товар в наличии на складе.

let item = prompt("Item: ")
let bag = ["key", "apple", "dog"]

if (bag.includes(item)) {
    console.log("Is in bag")
} else {
    console.log("Not in bag")
}