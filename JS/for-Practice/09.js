// 9. Написать цикл, который выводит числа от 1 до 100, но вместо чисел,
// кратных 3, выводит "Fizz", а вместо чисел, кратных 5, выводит "Buzz".

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}