function throttle(func, duration) {
    // TODO: 在这里编写具体实现
    var timer = null;
    var pre = 0;
    return function(){
        context = this;
        args = arguments;
        var now = +new Date();
        var remaining = duration-(now-pre);
        if(remaining<=0 || remaining > duration){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            pre = now;
            func.apply(context, this);
        }else if( timer == null){
            timer = setTimeout(()=>{
                func.apply(context, this);
                timer = null;
                pre = +new Date();
            },remaining)  
        }
     

    }
}

window.addEventListener('scroll', throttle(func, 50), false);