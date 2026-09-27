// 42. Конвертация размера файла в удобочитаемый формат: Напишите программу,
// которая выводит размер файла в удобочитаемом формате (КБ, МБ, ГБ).

let size = prompt("File size in bytes: ")

if (size < 1024) {
    console.log(`${size} B`)
} else if (size < 1024 * 1024) {
    console.log(`${(size / 1024).toFixed(2)} KB`)
} else if (size < 1024 * 1024 * 1024) {
    console.log(`${(size / 1024 / 1024).toFixed(2)} MB`)
} else {
    console.log(`${(size / 1024 / 1024 / 1024).toFixed(2)} GB`)
}