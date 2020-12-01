// 也是分而治之，自顶向下的思想，当完全有序的时候，划分不均匀，层数可能退化成 n^2 ，因此随机选取标定
// 当存在大量重复元夙的时候也可能大量重复元素集中在一侧，划分不均匀，因此可以采用左右指针的形式，或者三路快排
// 不稳定的算法

function quickSort(arr){
    let n = arr.length;
    __quickSort__(arr,0,n-1);
    return arr;
}

function __quickSort__(arr,l,r){
    if( l >= r) return;
    let mid = __quick__(arr,l,r);
    __quickSort__(arr,l,mid-1);
    __quickSort__(arr,mid+1,r);
}

function __quick__(arr,l,r){
    // 随机化一个标兵元素
    let rand = Math.floor(Math.random() * (r-l) + l );
    let tmp = arr[l];
    arr[l] = arr[rand];
    arr[rand] = tmp;
    // [l+1,p) (q,r] 分别是小于 arr[l] 和 大于 arr[l]两部分
    let p = l+1,q = r;
    while(true){
        while(p <= r && arr[p] < arr[l]) p++;
        while(q > l && arr[q] > arr[l]) q--;
        if(p > q ) break;
        let tmp = arr[q];
        arr[q] = arr[p];
        arr[p] = tmp;
        p++;
        q--;
    }
    arr[l] = arr[q];
    arr[q] = tmp;

    return q;
}


let arr = [3,6,1,4,5,9,2];

console.log(quickSort(arr));