// 49. Написать функцию, которая извлекает уникальные значения из двух объектов.

function getUniqueValues(obj1, obj2) {
    let values = [...Object.values(obj1), ...Object.values(obj2)]

    return [...new Set(values)]
}

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    d: 2,
    e: 3,
    f: 4
}

console.log(getUniqueValues(obj1, obj2))