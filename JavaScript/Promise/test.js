/**
 * new Promise((resolve,reject)=>{
 * })
 * 构造函数接受一个函数作为参数，这个函数接受两个函数作为参数，一个是reslove一个是reject
 */

 /**
  * Promise有三个状态 只能从pending -> resolve 或者从 pending -> rejected;
  */

 const isFunction = fn => typeof fn === 'function';
 const PENDING = 'PENDING';
 const FULFILLED = 'FULFILLED';
 const REJECTED = 'REJECTED' ;
 class MyPromise {
    constructor(handle){
        if(!isFunction(handle)) throw new Error('handle is not a function!');
        this._value = undefined;
        this.state = PENDING;
        this.resolveQueue = [];
        this.rejectQueue = [];
        try {
            handle(this._resolve.bind(this),this._reject.bind(this));
        }catch(err){
            this._reject(err);
        }
    }
    /**
     * 
     * resolve 负责将Promise状态由pending->resolve 并调用then中注册的函数；
     * 如果resolve里面接受的是一个promise，那么该promise的状态决定当前primise的状态
     */
    _resolve(val){
        const run = () => {
            const fulfilled = (val) => {
                while(this.resolveQueue.length){
                    const cb = this.resolveQueue.unshift();
                    cb(val);
                }
            }
            const rejected = (val) => {
                while(this.rejectQueue.length){
                    const cb = this.rejectQueue.unshift();
                    cb(val);
                }
            }
            if(this.state !== PENDING ) return;
            if(val instanceof MyPromise){
                val.then(value => {
                    this._value = value;
                    this.state = FULFILLED;
                    fulfilled(value);
    
                }, error => {
                    this._value = error;
                    this.state = REJECTED;
                    rejected(error);
                })
            }else{
                this._value = val;
                this.state = FULFILLED;
                fulfilled(val);
            }
        };
        setTimeout(run,0)

    }

    _reject(val){
        const run  = () => {
            if(this.state !== PENDING ) return;
            this._value = val;
            this.state = REJECTED;
    
            while(this.rejectQueue.length){
                const cb = this.rejectQueue.unshift();
                cb(val);
            }
        }
        setTimeout(run,0);
    }
    /**
     * 
     * @param {状态为resolve的回调函数} onFulfilled 
     * @param {状态为reject的回调函数} onRejected 
     * 这个then函数最终，返回的是一个promise对象。这个Promise对象的resolve和reject的状态，将由当前promise对象的then里面的参数决定
     * 1.then不是函数，那么返回的Promise立即执行resolve，且参数为then里面的参数
     * 2.then里面是函数
     * 如果返回值是一个函数，且这个函数的执行结果不是promise，那么将这个执行结果作为新返回的promise对象的值
     * 如果返回值是一个promise，则需要等这个promise.状态改变之后，才会被调用，新的Promise状态和这个返回promise的执行状态相同
     */
    then(onFulfilled, onRejected){
        const { state , _value } = this;
        return new MyPromise((onFulfilledNext, onRejectedNext) =>{
            let fulfilled = value => {
                try{
                    if(!isFunction(onFulfilled)){
                        onFulfilledNext(value);
                    }else{
                        let res = onFulfilled(value);
                        if(res instanceof MyPromise){
                            res.then(onFulfilledNext,onRejectedNext);
                        }else{
                            onFulfilledNext(res);
                        }
                    }
                }catch(error){
                    onRejectedNext(error);
                }
          
            };
            let rejected = error => {
                if(!isFunction(onRejected)){
                    onRejectedNext(value);
                }else{
                    let res = onRejected(error);
                    if(res instanceof MyPromise){
                        res.then(onFulfilledNext,onRejectedNext);
                    }else{
                        onFulfilledNext(res);
                    }
                }
            }
            switch(state) {
                case PENDING:
                    this.resolveQueue.push(fulfilled);
                    this.rejectQueue.push(rejected);
                case FULFILLED:
                    fulfilled(_value);
                case REJECTED:
                    rejected(_value);
            }

        })
    }

    catch(onRetected){
        return this.then(undefined,onRetected);
    }

    static resolve(val){
        if(val instanceof MyPromise) return val;
        return new MyPromise(resolve => resolve(val));
    }
    static reject(val){
        return new MyPromise((resolve, reject) => reject(val));
    }

    static all(list){
        return new MyPromise((resolve, reject) => {
            let count = 0;
            let resultArr = [];
            for([key , value ]of resultArr.entries()){
                this.resolve(value).then(res => {
                    count++;
                    resultArr[key] = res;
                    if(result === list.length) resolve(resultArr);
                }, err => {
                    reject(err);
                })
            }
        })

    }
    static race(list){
        return new MyPromise((resolve, reject)=>{
            for(value of list){
                this.resolve(value).then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            }
        })
    
        
    }
    finally(cb){
        return this.then(
            value => MyPromise.resolve(cb()).then(()=> value),
            err => MyPromise.resolve(cb()).then(() => { throw reason})
        )
    }
 }