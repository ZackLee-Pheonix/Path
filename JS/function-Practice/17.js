// 17. Написать функцию, которая возвращает уникальные элементы из массива строк.

function unique(a) {
    let result = []

    for (let i = 0; i < a.length; i++) {
        let found = false

        for (let j = 0; j < result.length; j++) {
            if (a[i] === result[j]) {
                found = true
                break
            }
        }
        if (!found) {
            result.push(a[i])
        }
    }
    return result
}

const array = ["apple", "banana", "apple", "orange", "banana"]

console.log(unique(array))