  
  // 第四题
  
  /**
   * 
   * 说明：生成一个值，使其每次调用值都自增
   * 示例：
   *  var a = incrementGenerator();
   *  var result = (a == 1 && a == 2 && a == 3);
   *  console.log(result); // true
   */
  
   /**定义在原型上重写toString方法 。生成实例每次读取值时候自动调用toString*/
  function incrementGenerator() {
    var x = 0;
    incrementGenerator.prototype.toString = function(){
      return ++x;
    }
  }

//定义在函数上，也就是静态方法，返回这个函数本身，每次读取函数的值的时候，会自动调用toString方法
var a = new incrementGenerator();
console.log(a);
var result = (a == 1 && a == 2 && a == 3);
console.log(result); // true

  
function incrementGenerator() {
  var a = 1;
  incrementGenerator.toString = function(){
    return a++;
  }
return incrementGenerator;
}

// 测试
var a = incrementGenerator();
var result = (a == 1 && a == 2 && a == 3);
console.log(result); // true