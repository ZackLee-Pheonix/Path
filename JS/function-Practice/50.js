// 50. Написать функцию, которая получает количество дней до следующего года.

function daysUntilNextYear() {
    let today = new Date()

    let nextYear = new Date(today.getFullYear() + 1, 0, 1)

    let difference = nextYear - today

    return Math.ceil(difference / (1000 * 60 * 60 * 24))
}

console.log(daysUntilNextYear())