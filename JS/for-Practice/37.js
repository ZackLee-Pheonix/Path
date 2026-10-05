// 37.Написать цикл, который выводит элементы массива, кратные 4

let arr = [1, 2, 4, 5]

for (let i = 0; i < arr.length; i++){
    if(arr[i] % 4 === 0){
        console.log(arr[i])
    }
}