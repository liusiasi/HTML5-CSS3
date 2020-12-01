//localStorage缓存

function storage(key,url){
    const cache = JSON.parse(localStorage.getItem(key) || {});
    if(Date.now() < cache.expires){
        dispatch(cache.data);
        return;
    }

    fetch(url)
    .then(res=>res.json)
    .then(response=>{
        localStorage.setItem(key,
            JSON.stringify({
                expires:Date.now() + 60*1000,
                data:response, 
            })
        );
        dispatch(data);
    })
    .cache(err=>{
        MessageChannel.error(err);
    })

}

//函数缓存

function memory(fn){
    var cache = {};
    return function(){
        var args = Array.prototype.slice.call(arguments);
        var key = JSON.stringify(args);
        if(key in cache) return cache[key];
        else return cache[key] = fn.apply(this,arguments);
        
    }
}