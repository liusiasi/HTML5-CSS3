
  
  // 第四题

  /**
   * 
   * 说明：生成一个值，使其每次调用值都自增
   * 示例：
   *  var a = incrementGenerator();
   *  var result = (a == 1 && a == 2 && a == 3);
   *  console.log(result); // true
   */
  /**
   * 利用读取的时候会自动调用toString的方法。
   */
  
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
  
  
  
  

  
  