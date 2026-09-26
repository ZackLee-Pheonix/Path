// 31. Определение категории налогоплательщика: Напишите программу, которая в
// зависимости от дохода пользователя присваивает его категории для налогового
// учета.

let salary = prompt("Salary: ");

if (salary <= 1000) {
    console.log("Poor people")
} else if (salary <= 5000 && salary > 1000) {
    console.log("Normal people")
} if (salary <= 10000 && salary > 5000) {
    console.log("Rich people")
}