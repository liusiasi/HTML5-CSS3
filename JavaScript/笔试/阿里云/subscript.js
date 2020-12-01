  // 第三题
  
  /**
   * 说明：简单实现一个事件订阅机制，具有监听on和触发emit方法
   * 示例：
   * const event = new EventEmitter();
   * event.on('someEvent', (...args) => { 
   *     console.log('some_event triggered', ...args);
   * }); 
   * event.emit('someEvent', 'abc', '123'); 
   */
  class EventEmitter {
    constructor(){
        this.data = {};
    }
    on(key, func){
        if(!this.data[key]) this.data[key] = [];
        this.data[key].push(func);
    }
    emit(key, ...args){
        for(let fn of this.data[key]) fn.call(this,...args);    
    }
    remove(key,fn){
        let fnlist = this.data[key];
        if(!fnlist) return false;
        if(!fn){
            fnlist && (fnlist.length=0);
        }else{
            fnlist.map((item, index)=>{
                item == fn && fnlist.splice(index,1);
            })
        }

    }
}

const event = new EventEmitter();
var f1 = (...args) => { 
    console.log('some_event triggered1', ...args);
 }
 var f2 = (...args) => { 
    console.log('some_event triggered2', ...args);
 }

event.on('someEvent', f1); 
event.on('someEvent', f2); 


event.emit('someEvent', 'abc', '123'); 

event.remove('someEvent', f2); 

event.emit('someEvent', 'abc', '123'); 
