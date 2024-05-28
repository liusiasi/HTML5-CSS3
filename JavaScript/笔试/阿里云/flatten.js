 // 第二题
  
  /**
   * 多维数组打平成一维数组
   * 说明：
   *  1. 数组维度表示数组嵌套数组的深度，如二维数组`[1, [2]]`
   *  2. 数组维度不限，理论上可以无限
   *  3. 数组项可以是number、string、boolean、object、null等JSON合法数据类型
   * 示例：
   *  const a = ['1', 2, false, ['a[b]c', 'd,e,f', [3], [[4]]], [{g: 5}]];
   *  flatten(a); // 返回 ['1', 2, false, 'a[b]c', 'd,e,f', 3, 4, {g: 5}]
   */
  function flatten(arr) {
      while(arr.some(item=>Array.isArray(item))){
          arr = [].concat(...arr);
      }    
      return arr;
  }
 console.log(flatten(['1', 2, false, ['a[b]c', 'd,e,f', [3], [[4]]], [{g: 5}]]));
  