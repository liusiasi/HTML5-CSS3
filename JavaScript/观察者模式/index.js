class Subject {
    constructor(){
        this.observers = [];//观察者列表
    }
    //添加订阅者
    add(observer){
        this.observers.push(observer);
    }
    //删除
    remove(observer){
        let id = this.observers.findIndex(item => item === observer);
        id > -1 && observer.splice(i,1);
    }
    notify(){
        this.observers.forEach(item => {
            item.update();
        })
    }
}

class Observer {
    constructor(name){
        this.name = name;
    }
    update(){
        console.log(`目标通知我了，我是：${this.name}`);
    }
}

//实例化目标
let subject = new Subject();

//实例化两个观察者
let obs1 = new Observer('前端');
let obs2 = new Observer('后端');

subject.add(obs1);
subject.add(obs2);

subject.notify();