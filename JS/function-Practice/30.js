// 30. Написать функцию, которая удаляет ключ из объекта.

function deleteKey(a, key) {
    delete a[key]
    return a
}

const obj = {
    name: "John",
    age: 20
}

console.log(deleteKey(obj, "age"))