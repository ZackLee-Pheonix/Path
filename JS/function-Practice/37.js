// 37. Написать функцию, которая вычисляет периметр и площадь прямоугольника.

function rectangle(a, b) {
    let perimeter = 2 * (a + b)
    let area = a * b

    return {
        perimeter: perimeter,
        area: area
    }
}

console.log(rectangle(5, 3))