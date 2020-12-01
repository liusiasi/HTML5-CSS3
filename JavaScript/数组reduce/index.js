Array.prototype.reduce1 = function(fn,prev){
    var arr = this;
    let startIndex = prev ? 0 : 1;
    let result = startIndex ? prev : arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        result = fn(result,arr[i],i,arr);
    }
    return result;
}

console.log([1,2,3].reduce1((prev,item) => prev+item, 1));