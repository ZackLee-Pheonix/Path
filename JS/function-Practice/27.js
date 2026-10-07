// 27. Написать функцию, которая объединяет два объекта.

function merge(a, b) {
    return { ...a, ...b }
}

const obj1 = {
    name: "John"
}

const obj2 = {
    age: 20
}

console.log(merge(obj1, obj2))