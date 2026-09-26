// 23. Перевод в другую валюту: Напишите программу, которая конвертирует одну
// валюту в другую в зависимости от текущего курса.

let dollar = 17
let euro = 20
let lei = prompt("Lei: ")
let convert = prompt("Valute: ")

if (convert === "euro") {
    console.log(lei * euro)
} else if (convert === "dollar") {
    console.log(lei * dollar)
}

