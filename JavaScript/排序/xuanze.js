// 每次选择一个[i,n)区间最小的值，和 arr[i]交换。
// 不稳定的排序，不能提前终止

function selection(arr){
    let n = arr.length;
    for(let i = 0 ; i < n ; i++){
        let minIndex = i;
        for(let j = i+1 ; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}

let arr = [2,3,4,1,6,9];
console.log(selection(arr));