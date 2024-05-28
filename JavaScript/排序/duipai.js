// 堆排序就利用数组 的性质存储堆，采用heapify构建一个最大堆，然后每次将堆顶元素交换，在执行shiftdown

function heapSort(arr){
    let n = arr.length;
    // heapify 过程。构建最大堆
    for(let i = Math.floor((n-1)/2) ; i >= 0 ; i--){
        __shiftdown__(arr,n,i);
    }

    console.log('heapify');
    // 排序过程
    for(let j = n-1 ; j > 0 ; j--){
        let tmp = arr[j];
        arr[j] = arr[0];
        arr[0] = tmp;
        __shiftdown__(arr,j,0);
    }
    console.log('shiftdown');

    return arr;
}


function __shiftdown__(arr,n,index){
    // 至少又一个孩子才进行shiftdown
    while(2*index + 1 < n ){
        let j = 2*index+1;
        if( j + 1 < n && arr[j] < arr[j+1]){
            j += 1;
        }
        if(arr[index] > arr[j]) break;
        
        let tmp = arr[index];
        arr[index] = arr[j];
        arr[j] = tmp;
        index = j;
    }
}

let arr = [3,2,1,5,6,4];
console.log(heapSort(arr));