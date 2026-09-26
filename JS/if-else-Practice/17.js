// 17. Выбор действия на сайте: Напишите программу, которая в зависимости от типа
// устройства (мобильный или десктоп) меняет интерфейс сайта.

let device = prompt("Device: ")

if (device === "Mobile") {
    console.log("Mobile-version")
} else {
    console.log("Desktop-version")
}
