/**
 * es6的findIndex 参数是一个函数，返回值是符合函数的第一个元素的下标
 */

 function findIndex(array, predicate, context){
     for(var i = 0 ; i < array.length ; i++){
         if(predicate.call(context,array[i],i,array)) return i;
     }
     return -1;
 }
/**
 * sortedIndex。排序数组，查找某元素插入位置
 */
function cb(iteratee, context){
    if (context === void 0) return func;
    return function(){
        iteratee.apply(context, arguments);
    }
}

function sortedIndex(array, obj, iteratee, context){
    iteratee = cb(iteratee, context);
    var low = 0,high = array.length;
    while(low < high){
        var mid = Math.floor((low+high)/2);
        if(iteratee(array[mid]) < iteratee(obj)) low = mid + 1;
        else high = mid - 1;
    }
    return high;

}

/**
 * 仿照findIndex写一版indexof,优化isNaN,排序数组查找，二分查找
 */

 function createIndexOfFinder(dir){
     return function(array, item){
        var length = array.length;
         var index = dir > 0 ? 0 : length -1;
         //做NaN的判断
         if(item !== item){
             return findIndex(array.slice(), isNaN);
         }
         for(;index >= 0 && index < length ; index+=dir){
            if(array[index] === item) return index;
         }
         return -1;
     }
 }