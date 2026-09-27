// 50. Проверка наличия задолженности: Напишите программу, которая проверяет,
// есть ли у клиента задолженность по платежам, и выводит соответствующее
// сообщение.

let debt = prompt("Enter your debt: ")

if (debt > 0) {
    console.log(`You have a debt of ${debt}`)
} else {
    console.log("You have no debt")
}