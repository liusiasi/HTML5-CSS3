/**
 * 类数组对象，可以向数组一样遍历，但是却不能使用数组的方法
 * 但是可以用Function.call间接调用，也可以将类数组对象转化为数组对象
 * Arguments和一些Dom方法也返回类数组对象
 * Arguments属性length为实参长度
 */

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
 Array.prototype.slice.call(arrayList);
 Array.prototype.splice.call(arrayLike,0);
 Array.prototype.cancat.apply([],arrayLike);
 Array.from(arrayLike);

 /**
  * arguments.callee调用函数自身
  */

 var data = {};
 for(var i = 0 ; i < 3 ; i++){
     data[i] = (function(i){
         return function(){
            console.log(i);
         }
     })(i)
 }
 data[0]();
 data[1]();
 data[2]();//1,2,3；

 /**
  * 函数的实参和argumens值共享
  */

