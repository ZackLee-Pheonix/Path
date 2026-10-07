// 22. Написать функцию, которая клонирует объект.

function clone(a) {
    return { ...a }
}

const obj = {
    name: "John",
    age: 20
}

console.log(clone(obj))