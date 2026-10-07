// 14. Написать функцию, которая удаляет повторяющиеся элементы из массива

function delet(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                a.splice(j, 1)
                j--
            }
        }
    }
    return a
}

const array = [1, 2, 3, 3, 2]

console.log(delet(array))