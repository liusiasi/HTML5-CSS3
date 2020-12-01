/**
 * 函数的柯里化就是把就是将一个使用多个参数的函数，转化成一系列使用一个参数的函数
 * 作用：参数复用(避免重复书写)，提前确认，延迟运行(bind)
 */

 //第一版

var curry = function(fn){
    var args = [].slice.call(arguments,1);
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        fn.apply(this, newArgs);
    }
}

//简易版

var curry = function(fn, args){
    var length = fn.length;
    var args = args || [];
    return function(){
        var _args = args.slice(0),
        i,arg;
        for( i = 0 ; i < arguments.length ; i++){
            arg = arguments[i];
            _args.push(arg);
        }
        if(_args.length < length){
            return curry.apply(this, _args);
        }else{
            return fn.apply(this, _args);
        }
    }

}