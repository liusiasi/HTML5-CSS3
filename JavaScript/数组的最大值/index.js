/**
 * 主要是利用Math.max();求出一组数中的最大值
 * 有任何一个参数不能被转换成数值，结果就是NaN，如果能被转换成数值，就将会被转换
 * Number(null) == 0 Number(undefined)
 */

 //方法一 传统的循环
var arr = [6, 4, 1, 8, 2, 11, 23];

var result = arr[0];
for(var i = 1 ; i < arr.length ; i++){
    result = Math.max(result,arr[i]);
}

//方法二 reduce

function max(prev,next){
    return Math.max(prev,next);
}

var result = arr.reduce(max);

//方法三 排序

arr.sort(function(a,b){ return a-b;})

var result = arr[arr.length -1];

//方法四 eval

var result = eval("Math.max("+arr+")");

//方法五 apply

Math.max.apply(null,arr);

//方法六 es6

var result = Math.max(...arr);


