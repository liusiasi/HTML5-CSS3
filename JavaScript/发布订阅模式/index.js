class pubSub {
    constructor(){
        this.list = {};
    }
    subscribe(key,fn){
        if(!this.list[key]) this.list[key] = [];
        this.list[key].push(fn);
    }
    unsubscribe(key,fn){
        let fnlist = this.list[key];
        if(!fnlist) return false;
        if(!fn){
            fnlist && (fnlist.length = 0);
        }else{
            fnlist.forEach((item, index) => {
                item === fn && fnlist.splice(index, 1);
            });
        }
        
    }
    publish(key,...args){
        for(let fn of this.list[key]) fn.call(this, ...args);
    }

}

let pubSub = new pubSub();

pubSub.subscribe('onwork',time => {
    console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork',time => {
    console.log(`下班了：${time}`);
})

pubSub.subscribe('onlunch', time => {
    console.log(`吃饭了：${time}`);
})

pubSub.publish('offwork','18:00:00');
pubSub.publish('onlunch','12:00:00');

pubSub.unsubscribe('onwork');