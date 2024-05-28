function getReverse(arr,k){
    let n = arr.length;
    if( n == 0 ) return arr;
    k = k % n;
    patitialReverse(arr,0,n-1);
    patitialReverse(arr,0,k-1);
    patitialReverse(arr,k,n-1);
    return arr;
}

function patitialReverse(arr,l,r){
    while(l<r){
        let tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
        l++;
        r--;
    }
}
let arr = [1,2,3,4,5,6,7];
console.log(getReverse(arr,3));
console.log(getReverse(arr,8));
let arr1 = [];
console.log(getReverse(arr1,8));
let arr2 = [3];
console.log(getReverse(arr2,8));
