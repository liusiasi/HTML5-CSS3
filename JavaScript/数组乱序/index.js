/**
 * 将数组打乱
 * 1.使用sort打乱，这个时候会有乱序不够乱的情况，原因是sort底层采用的是插入排序，当待排元素和有序数组进行比较时
 * 一旦确定了位置就不会在跟位置前面的有序元素比较
 */

 //方案一
 var values = [1,2,3];
 values.sort(function(){
     return Math.random() - 0.5;
 })

 //方案二 将当前元素和随机位置元素交换
 function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

//es6
function shuffle(a){
    for(let i = a.length ; i ; i--){
        let j = Math.floor(Math.random() * i);
        [a[i-1], a[j]] = [a[j], a[i-1]];
    }
    return a;
}