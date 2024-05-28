function hasIntersection(arr1, arr2) {
    // 如果有交集，返回true，否则返回false
    // TODO: 你的代码
    var _arr1 = new Set(arr1);
    var _arr2 = new Set(arr2);
    var res = arr1.filter(item => _arr2.has(item));
    return res.length;
  }