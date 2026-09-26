// 29. Проверка разрешений на файловой системе: Напишите программу, которая
// проверяет, есть ли у пользователя разрешение на чтение и запись в указанную
// папку.

let user = prompt("User: ")

if (user === "admin") {
    console.log("All")
} else if (user === "reader") {
    console.log("Read")
} else if (user === "recorder") {
    console.log("Record")
}