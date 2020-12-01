/**
 * 数组扁平化
 */

//递归

function flatten(arr){
    var result = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            result = result.cancat(flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}


//toString();
function flatten(arr){
    return arr.toString().split(',').map(item => +item);
}

//使用reduce简化遍历
function flatten(arr){
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next): next)
    },[])
}

//使用es6的扩展运算符

function flatten(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].cancat(...arr);
    }
    return arr;
}


