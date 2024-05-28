const JsonP =  function(url, data){
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        let encodedata = Object.keys(data).map(item => encodeURIComponent(item)+'='+encodeURIComponent(data[item])).join('&');
        window.callback = function(data){
            document.body.removeChild(script);
            delete window.callback;
            resolve(data);
        }
        script.src = `url?${encodedata}&cb=callback`
        document.body.appendChild(script);
    })

}
