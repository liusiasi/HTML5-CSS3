/*------------------节流-------------------- */
/*持续触发事件，保证一段时间内只调用一次事件处理程序 */
/** 例如抢券 */
/*基于时间戳，第一次立即触发，最后一次事件触发，不会执行处理函数 */
function throttle(fn, delay){
    var pre = 0;
    return function(){
        var context = this;                
        var args = arguments; 
        var cur = Date.now();
        if(cur-pre >= delay){
            fn.apply(context, args);
            pre = Date.now();
        }
    }
    
}
function handle(){
    console.log(Math.random());
}

window.addEventListener('scroll', throttle(handle,1000));


/*基于定时器，第一次触发事件，处理函数不会立即执行，最后一次触发事件，事件会执行 */
function throttle(fn, delay){
    var timeout = null;
    return function(){
        var context = this;
        var args = arguments;
        if(timeout == null){
            timeout = setTimeout(function(){
                fn.apply(context, args);
                timeout = null;
            },delay);
        }
    }
    
}
function handle(){
    console.log(Math.random());
}

/*时间戳和定时器结合 第一次触发立刻执行处理函数，最后一次触发，也会设定设定定时器，执行完最后的一次触发*/
function throttle(fn, delay){
    var timer, result, context, args;
    var previous = 0;
    var throttled = function(){
        var now = +new Date();
        context = this;
        args = arguments;
        var remaining = delay - (now - previous);
        if(remaining <=0 || remaining > delay){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            previous = now;
            fn.apply(context,args);
        }else if(!timer){
            timer = setTimeout(function(){
                timer = null;
                previous = +new Date();
                fn.apply(context, args);
            },remaining);
        }
    }
    return throttled;

}

/**
 * 可以进行控制，
 * 使用leading：false禁用第一次执行
 * 使用trailing：false禁用最后一次执行
 */

function throttle(fn,delay,option){
    var timer = null;
    var previous = 0;
    var context, args;
    if(!option) option = {};
    var throttled = function(){
        context = this;
        args = arguments;
        var now = new Date().getTime();
        if(!previous && option.leadding == false) previous = now;
        var remaining = delay - (now - previois);
        if(remaining <= 0 || remaining > delay){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            previous = now;
            fn.apply(context,args);
        }else if(!timer && option.trailing === false){
            timer = setTimeout(function(){
                previous = option.leadding === false ? 0: new Date().getTime(); 
                timer = null
                fn.apply(context,args);
                if (!timer) context = args = null;
            },remaining)
        }
    }
    throttled.cancel = function(){
        clearTimeout(timeout);
        previous = 0;
        timer = null;
    }
    return throttled;
}

window.addEventListener('scroll', throttle(handle,1000));