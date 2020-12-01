/**
 * new 的实现，new结果是一个对象
 * 1.访问到 Otaku 构造函数里的属性
 * 2.访问到 Otaku.prototype 中的属性
 */

 /**
  * 1.创建一个新的obj
  * 2.取出第一个参数，就是传入的构造函数
  * 3.obj原型指向构造函数，这样obj就能访问到构造函数原型中属性
  * 4.使用apply，改变构造函数this指向新创建的对象，这样obj就能访问构造函数中的属性
  * 5.返回obj
  * 判断返回值如果是对象直接返回，如果不是就返回新创建的对象
  */

 function objectFactory(){
     var obj = {};
     Constructor = [].shift.call(arguments);
     obj.__proto__ = Constructor.prototype;
     var result = Constructor.apply(obj,arguments);
     return typeof result === 'object' ? result : obj;
}