// 38. Определение цены для различных клиентов: Напишите программу, которая
// выводит цену для разных категорий клиентов (например, "Новичок", "Постоянный
// клиент", "Промо-код").

let user = prompt("Who are you: ")
let price = 1000

if (user === "Новичок") {
    console.log(`Price: ${price}`)
} else if (user === "Постоянный клиент") {
    console.log(`Price: ${price * 0.8}`)
} else if (user === "Промо-код") {
    console.log(`Price: ${price * 0.8}`)
}