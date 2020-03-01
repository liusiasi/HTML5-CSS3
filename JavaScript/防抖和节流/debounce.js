/*保证触发的最后一个事件之后wait秒在执行事件处理函数
 */
function debounce(fn, wait){
    var timeout = null;
    return function(){
        if(timeout !== null) clearTimeout(timer);
        timeout = setTimeout(fn, wait);
    }

}

function handle(){
    console.log(Math.random());
}

window.addEventListener('scroll',debounce(handle,1000));

/*持续触发事件，保证一段时间内只调用一次事件处理程序 */

/*基于时间戳，最后一次事件触发，不会执行处理函数 */
function throttle(fn, delay){
    var pre = Date.now();
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
    var timer = null;     
    var start = Date.now();
    return function(){
        var end = Date.now();
        var remaintime = delay-(end-start);
        if(timer) clearTimeout(timer);
        var context = this;             
        var args = arguments; 
        if(remaintime <= 0){
            fn.apply(context, args);
            start = Date.now();
        }else {
            timer = setTimeout(fn,remaintime)
        }
    }

}
window.addEventListener('scroll', throttle(handle,1000));