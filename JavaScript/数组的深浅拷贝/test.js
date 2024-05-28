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
