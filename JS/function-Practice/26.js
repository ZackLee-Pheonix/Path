// 26. Написать функцию, которая преобразует строку в объект с ключами и значениями.


function toObject(a) {
    let obj = {}

    let pairs = a.split(",")

    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split(":")

        obj[pair[0].trim()] = pair[1].trim()
    }

    return obj
}

let str = "name:John, age:20"

console.log(toObject(str))