/**
 * JQuery each和es5提供的foreach
 * es5提供的forEach没有办法终止或者跳出循环，除诶抛出异常，但是Jquery的each函数，推出each循环只需要回调函数返回false
 */
//优化：当函数返回false的时候跳出遍历。this指向当前元素。call会产生性能能被关上的损失
function each(obj, callback){
    var length, i;
    if( isArrayLike(obj)){
        length = obj.length;
        for(;i <  length ; i++){
            if(callback.call(obj[i],i,obj[i]) === false ) break;
        }
    }else{
        for(i in obj){
            if(callback.call(obj[i],i,obj[i]) === false  ) break;
        }
    }
    return obj;
}