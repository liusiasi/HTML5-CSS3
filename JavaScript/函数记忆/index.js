/**
 * 上一次计算的结果缓存起来，思路就是把参数和对应结果存储起来
 */

 function memoize(fn){
     var cache = {};
     return function(){
         var key = arguments.length + Array.prototype.join.call(arguments,",");
         if(key in cache) return cache[key];
         return cache[key] = fn.apply(this,arguments);
     }
 }

 //但是这一版本没办法判断传输进来的对象，因此用JSON.stringify作为key
 function memoize(fn){
    var cache = {};
    return function(){
        var args = Array.prototype.slice.call(arguments);
        var key = JSON.stringify(args);
        if(key in cache) return cache[key];
        return cache[key] = fn.apply(this,arguments);
    }
}
