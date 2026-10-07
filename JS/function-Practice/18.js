// 18. Написать функцию, которая объединяет два массива в один.


function arrays(a, b){
    return a.concat(b)
}

const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7,8]

console.log(arrays(arr1,arr2))