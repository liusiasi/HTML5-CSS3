// 每次比较相邻两个元素，若较大元素在左边就交换，直到最大元素交换到最右面
// 稳定的算法 双重循环 

function bullu(arr){
    let n = arr.length;
    for(let i = 0 ; i < n ; i++){
        // 比较[j-1,n-i)区间的元素
        for(let j = 1 ; j < n-i ; j++){
            if(arr[j] < arr[j-1]){
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }
    return arr;
}


let arr = [3,4,2,7,5,9];
console.log(bullu(arr));


// 优化：当不再交换的时候，记录位置,下次冒泡就冒泡到该位置

function bullu1(arr){
    let n = arr.length;
    let newn;
    do{
        newn = 0;
        let i;
        for(i = 1 ; i < n ; i++){
            if(arr[i-1] > arr[i]){
                let tmp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = arr[i];
                newn = i;
            }
        }
        n = newn;
    }while(newn > 0)
    return arr;
}

console.log(bullu1(arr));

