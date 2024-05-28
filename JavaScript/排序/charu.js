// 每次从在[0,i]中找到arr[i+1] 应该在的位置，
// 稳定排序

function insertion(arr){
    let n = arr.length;
    for(let i = 1 ; i < n ; i++){
        for(let j = i ; j >0 && arr[j] < arr[j-1] ; j--){
            let tmp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = tmp;
        }
    }
    return arr;
}


let arr = [2,4,1,6,3,9];
console.log(insertion(arr));

// 简化三次赋值的操作，找到i+1所在的最终位置，插入

function insertion1(arr){
    let n = arr.length;
    for(let i = 1 ; i < n ; i++){
        let current = arr[i];
        let j;
        for(j = i ; j > 0 && current < arr[j-1]; j--){
            arr[j] = arr[j-1];
            
        }
        arr[j] = current;
    }

    return arr;
}

console.log(insertion1(arr));