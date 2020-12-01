// 第五题
  
  /**
   * 实现一个检验对象是否循环指向的方法
   * 说明：当一个对象存在对自身引用时，称之为循环指向
   *   如`var o = { a: {} }; o.a = o;` 
   *   o -> a -> o，就形成循环指向
   * 示例：
   *   isCyclic(window); // true
   *   isCyclic({}); // false
   *   var o = {}; o.o = o;
   *   isCyclic(o); // true
   * 
   *   var obj = { foo: { bar: { baz: { qux: {} } } } };
   *   obj.foo.bar.baz.qux = obj.foo;
   *   isCyclic(o); // true
   */
  function isCyclic (obj) {
    var seenObjects = [];
   
    function detect (obj) {
      if (typeof obj === 'object') {
        if (seenObjects.indexOf(obj) !== -1) {
          return true;
        }
        seenObjects.push(obj);
        for (var key in obj) {
          if (obj.hasOwnProperty(key) && detect(obj[key])) {
            return true;
          }
        }
      }
      return false;
    }
   
    return detect(obj);
  }

var obj = { foo: { bar: { baz: { qux: {} } } } };
obj.foo.bar.baz.qux = obj.foo;

var copyObj = isCyclic(obj);
console.log(copyObj);