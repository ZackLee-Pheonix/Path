// 19. Написать функцию, которая возвращает строку с перевёрнутыми словами

function invers(a) {
    let arr = a.split("")

    for (let i = 0; i < arr.length / 2; i++) {

        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp

    }
    return arr.join("")
}

let str = "hello"

console.log(invers(str))