/**
 * 函数组合避免嵌套函数从上而下的执行，而是以一种从左向右的形式呈现
 * greet(hello(toUpperCase(x)));
 * compose(greet,hello,toUpperCase);
 */

 function compose(){
     var args = arguments;
     var start = args.length-1;
     return function(){
         var i = start;
         var result = args[start].apply(this, arguments);
         while(i--) result = args[i].apply(this, result);
         return result;
     }
 }