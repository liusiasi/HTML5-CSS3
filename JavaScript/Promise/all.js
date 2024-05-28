//方法在原型上定义，all方法接受一组可迭代对象作为参数，通常是一组promise
Deferred.prototype.all = function(promises){
    //获取参数数组长度，即并发promise的个数。
        var count = promises.length;
    //保存当前this
        var that = this;
    //声明结果数组，存放参数数组的执行结果
        var results = [];
    //forEach循环是并发执行，Promise.all()可以处理并发请求的根源。
        promises.forEach(function(promise,i){
    //resolve()
            promise.then(function(data){
    //当每一个promise被处理，count-1
                count--;
    //传入resolve函数的参数data为与异步操作相关的附加数据。
                results[i] = data;
    //当参数数组中的所有promise都被处理时。promise.all()返回的promise被解决。
                if(count == 0){
                    that.resolve(results);
                }
    //如果某一个失败，promise.all()立即执行reject回调。
    //但剩余的promise依旧继续执行，只不过对promise.all的结果不会产生影响了。
            },function(err){
                that.reject(err);
            });
        }) ;
        return this.promise;
    }