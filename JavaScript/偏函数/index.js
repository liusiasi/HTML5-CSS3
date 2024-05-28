/**
 * 柯里化将一个n元函数转化成n个一元函数
 * 偏函数将一个n元函数转化成一个n-x元函数
 */

 //可以保证this的指向
 function partial(fn){
     var agrs = [].slice.call(arguments);
     return function(){
         var newArgs = agrs.concat([].slice.call(arguments));
         return fn.apply(this, newArgs);
     }
 }
 //处理有占位符的情况

 function partial(fn){
     var args = [].slice.call(arguments);
     return function(){
         var position = 0,len = args.length;
         for(i = 0 ; i < len ; i++){
             if(args[i] === '_') args[i] = arguments[position++];
         }
         while(position < arguments.length) args.push(arguments[position++]);
         return fn.apply(this, args);
     }
 }