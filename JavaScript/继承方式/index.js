/**
 * 1.原型链继承
 *  缺点：
 * 1.引用类型的属性被所有实例所共享。也就是Parent的属性
 * 2.在创建Child实例的时候不能Parent传参
 */

 function Parent(name){
     this.name = name
 }

 Parent.prototype.getName = function(){
     console.log(this.name);
 }

 function Child(){

 }

 Child.prototype = new Parent();

 var child = new Child();
 console.log(child1.getName()) // kevin

 /**
  * 2.借用构造函数
  * 优点，
  * 1.避免了引用类型属性共享
  * 2.可以在Child中向Parent传递参数
  * 缺点：方法在构造函数中定义，每次都需要创建方法
  */

  function Parent(){
    this.name = ['kevin', 'daisy'];
  }
  function Child(){
    Parent.call(this);
  }
  var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

/**
 * 3.组合继承
 * 该共享的共享，该继承的继承
 */

 function Parent(name){
     this.name = name;
     this.colors = ['red', 'blue', 'green'];
 }
 Parent.prototype.getName = function(){
    console.log(this.name);
 }

 function Child(name,age){
    Parent.apply(this,name);
    this.age = age;
 }

 Child.prototype = new Parent();

 var child1 = new Child('kevin', '18');

 /**
  * 4.原型继承 创建一个新的对象，使用现有对象来提供给新对象的__proto__， Object.create 的模拟实现
  * 包含引用类型的属性始终都会共享对应的值
  */

    function createObj(o){
        function F(){};
        F.prototype = o;
        return new F();
    }

    var person = {
        name: 'kevin',
        friends: ['daisy', 'kelly']
    }
    var person1 = createObj(person);
  /**
   * 5.寄生继承
   * 和构造函数继承一样，每次创建对象都需要创建一遍方法
   */

  function createObj(o){
      var obj= Object.create(o);
      obj.getName = function(){
          console.log('hi');
      }
      return obj
  }

  /**
   * 6.寄生组合式继承
   * 组合最大的问题就是调用两次构造函数函数
   * 解决了两次调用Parent构造函数的问题，避免了在Parent.prototype上面创建不必要属性。保持原型链保持不变
   */

   function Parent(name) {
       this.name = name;
       this.colors = ["a","b","c"];
   }

   Parent.prototype.getName = function(){
       console.log('hi');
   }

   function Child(name, age){
       Parent.call(this,name);
       this.age = age;
   }

   function F() {};
   F.prototype = Parent.prototype;
   Child.prototype = new F();

   var child1 = new Child("aa","18");
   console.log(child1);



