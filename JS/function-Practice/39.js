// 39. Написать функцию, которая генерирует случайное число в заданном диапазоне.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomNumber(1, 10))