// 20. Написать функцию, которая находит общие элементы двух массивов.

function arrays(a, b){
    let newarr = []

    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            if (a[i] === b[j]){
                newarr.push(a[i])
            }
        }
    }

    return newarr
}

const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7,8]

console.log(arrays(arr1,arr2))
