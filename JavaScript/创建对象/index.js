/**
 * 1.工厂模式
 *  缺点：所有实例都指向一个原型
 */
function factory(name){
    var o = new Object();
    o.name = name;
    o.getName = function(){
        console.log(this.name);
    }
    return o;
}

var person1 = factory("liu");

/**
 * 2.构造函数模式
 * 优点：可以识别为特定的类型
 * 缺点：每次创建实例的时候，每个方法都需要重新创建一次
 */
function Person(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name);
    }
}

var person1 = new Person(name);

/**
 * 3.构造函数优化
 * 优点：解决了方法重新创建的问题
 * 缺点：没有封装性
 * 
 */
function Person(name){
    this.name = name;
    this.getName = getName;
}
function getName(){
    console.log(this.name);
}

var person1 = new Person(name);

/**
 * 4.原型方法
 * 优点：方法不需要重复创建
 * 缺点：所有实例共享属性和方法，不能初始化参数
 */

 function Person(){

 }
 Person.prototype.name = 'Kevin';
 Person.prototype.getName = function(){
     this.name;
 }

 var person1 = new Person();


/**
 * 5.原型方法封装
 */

function Person(){
}
Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function(){
        console.log(this.name);
    }
}

var person1 = new Person();

/**
 * 6.组合方法
 * 优点：该共享的共享，该私有的私有。
 * 缺点：有的人就是希望有更好的封装性
 */

function Person(name){
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    getName: function(){
        console.log(this.name);
    }
}

var person1 = new Person();


/**
 * 7.动态原型模式
 * 注意不能使用动态字面量重写原型,因为new创建对象的时候，会先继承原型，在执行构造函数，在在构造函数当中去重写原型不能修改之前的结果
 */

function Person(name){
    this.name = name;
    if(typeof this.getName != 'function' ){
        Person.prototype.getName = function(){
            console.log(this.name);
        }
    }
}

var person1 = new Person();

/**
 * 8.寄生模式
 * 只是比工厂模式多一个New
 * 当我们想创建一个具有额外方法的数组，但是又不直接修改Array
 */

 function Person(name){
     var obj = new Object();;
     obj.name = name;
     obj.getName = function(){
         console.log(this.name);
     }
     return obj;
 }
 var person1 = new Person(name);

 /*
 * 9.稳妥构造函数模式。
 * 与寄生构造函数的不同就是不引用this
 * 不适用new 适合在安全环境
 */

function person(name){
    var o = new Object();
    o.sayName = function(){
        console.log(name);
    };
    return o;
}

var person1 = person('kevin');

person1.sayName(); // kevin

person1.name = "daisy";

person1.sayName(); // kevin

console.log(person1.name); // daisy
