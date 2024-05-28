/*------------------防抖-------------------- */
/* 保证触发的最后一个事件之后wait秒在执行事件处理函数 
 * 例如输入用户名，验证是否重复场景
 */
function debounce(fn, wait){
    var timeout = null;
    return function(){
        //绑定this和参数
        var context = this;
        var args = arguments;
        if(timeout !== null) clearTimeout(timer);
        timeout = setTimeout(()=>{
            fn.apply(context,args);
        }, wait);
    }
}

function handle(){
    console.log(Math.random());
}
window.addEventListener('scroll',debounce(handle,1000));

/*需求：希望在第一次立即执行，然后在停止的n秒后执行，加一个是否立刻执行的参数
 *注意：若希望在第一次执行，也需要为第一次设置定时器 
 */
function debounce(fn, wait, immediate){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(timer) clearTimeout(timer);

        if(immediate){
            var callNow = !timer;
            timer = setTimeout(()=>{
                fn.apply(context, args);
            }, wait);
            if(callNow) fn.apply(context,args);

        }else{
            timer = setTimeout(()=>{
                fn.apply(context, args);
            }, wait)
        }   
    }
}
/**
 * 如果我们想中途取消，让函数立刻执行，增加cancel
 */

function debounce(fn, wait, immediate){
    var timer = null;
    var context,args;
    var debounced = function(){
        if(timer) clearTimeout(timer);
        if(immediate){
            var callNow = !timer;
            timer = setTimeout(()=>{
                fn.apply(context, args);
            },wait);
            if(callNow) fn.apply(context,args);
        }else{
            timer = setTimeout(()=>{
                fn.apply(context, args);
            },wait)
        }
    
    }
    debounce.cancle = function(){
        clearTimeout(timer);
        timer = null;
    }
    return debounced;
}



