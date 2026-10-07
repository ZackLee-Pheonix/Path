// 10. Написать функцию, которая возвращает значение максимального элемента
// массива.

function arr(a){
    let max = a[0]
    for(let i = 0; i < a.length; i++){
        for(let j = 1; j < a.length; j++){
            if (a[i] > a[j]){
                max = a[i]
            }
        }
    }
    return max 
}

const array = [2, 6, 5]

console.log(arr(array))