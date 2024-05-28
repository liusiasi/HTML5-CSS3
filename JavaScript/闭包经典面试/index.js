/**
 * 因为在js中没有块级作用域，因此在for循环中就会出现不理想的i值
 */

 var data = {};
 for(var i = 0 ; i < 3 ; i++){
     data[i] = function(){
         console.log(i);
     }
 }
 data[0]();
 data[1]();
 data[2]();//答案都是3；

/**利用闭包,匿名函数的执行上下文中的OA 绑定了i。因此data函数的作用域链中就能查找到对应的局部i的值。而不是去全局中查找 */
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

 /**利用callee */
 var data = {};
 for(var i = 0 ; i < 3 ; i++){
     data[i] = (function(){
         console.log(arguments.callee.i);
     }).i = i
 }
 data[0]();
 data[1]();
 data[2]();//1,2,3；
