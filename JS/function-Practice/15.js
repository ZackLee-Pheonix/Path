// 15. Написать функцию, которая сортирует массив чисел по возрастанию.

function sort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                let temp = a[j]
                a[j] = a[i]
                a[i] = temp
            }
        }
    }
    return a
}

const array = [1, 2, 3, 0, 7]

console.log(sort(array))