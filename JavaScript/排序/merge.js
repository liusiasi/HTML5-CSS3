// 分而治之，关注的不是分的过程，每次/2划分，最后分成logn层级，注重的是合并的过程
//  稳定的排序，优化就是 arr[mid] > arr[mid+1] 才进行归并
function mergeSort(arr){
    let n = arr.length;
    __mergeSort__(arr,0,n-1);
    return arr;
}

function __mergeSort__(arr,l,r){
    if(l >= r) return;

    // 划分
    let mid = Math.floor((l+r)/2);
    console.log(mid);
    __mergeSort__(arr,l,mid);
    __mergeSort__(arr,mid+1,r);
    if(arr[mid] > arr[mid+1]){
        merge(arr,l,mid,r);
    }
}

// [l.mid] 和 [mid+1,r] 合并
function merge(arr, l, mid, r){
    let aux = [];
    // 时间换空间的辅助数组
    for(let i = l ; i <= r ; i++){
        aux[i-l] = arr[i];
    }
    let p = l,q = mid + 1;
    for(let k = l ; k <= r ; k++){
        if(p > mid){
            arr[k] = aux[q-l];
            q++;
        }else if(q > r){
            arr[k] = aux[p-l];
            p++;
        }else if(aux[p-l] < aux[q-l]){
            arr[k] = aux[p-l];
            p++;
        }else {
            arr[k] = aux[q-l];
            q++;
        }
    }
}

let arr = [3,4,1,5,2,6,8];
console.log(mergeSort(arr));