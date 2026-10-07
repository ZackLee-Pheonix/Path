// 29. Написать функцию, которая извлекает определённый ключ из объекта.

function getKey(a, key) {
    return a[key]
}

const obj = {
    name: "John",
    age: 20
}

console.log(getKey(obj, "name"))