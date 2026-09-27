// 34. Простой слайдер изображений: Напишите программу, которая в зависимости от
// нажатой кнопки (вперёд/назад) показывает следующее или предыдущее
// изображение.

let img1 = 123
let img2 = 234
let user = prompt("Left or Rigth: ")

if (user === "Left") {
    console.log(img2)
} else if (user === "Rigth") {
    console.log(img2)
} else {
    console.log(img1)
}