/**
 * 绑定this，返回一个函数，可以接受参数
 */

 Function.prototype.bind1 = function(context){
     var self  = this;
     var args = Array.prototype.slice.call(arguments,1);
     return function(){
         var newArgs = Array.prototype.slice.call(arguments);
         var result = self.apply(context,args.concat(newArgs));
         return result;
     }
 }

 /**
  * 可以将bind返回的函数，当作构造函数使用，那么之前传入的this将失效。this指向当前构造函数实例对象
  */

  Function.prototype.bind2 = function(context){
      var self = this;
      var args = Array.prototype.slice.call(arguments,1);
      var fBound = function(){
          var bindArgs = Array.prototype.slice.call(arguments);

          return self.apply(this instanceof fBound ? this: context,args.concat(bindArgs));

      }
      fBound.prototype = this.prototype;
      return fBound;
  }

  /**
   * 为避免修改fBound的prototype的时候修改绑定函数的prototype，可以使用空函数进行转换
   * 当bing返回的函数作为构造函数的时候，bind的this失效，this指向实例，将绑定函数的this指向该实例。
   * 修改bind函数的prototype为函数的prototype，这样就能访问到函数原型方法
   */


  Function.prototype.bind2 = function(context){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var fNOP = function () {};

    var fBound = function(){
        var bindArgs = Array.prototype.slice.call(arguments);

        return self.apply(this instanceof fBound ? this: context,args.concat(bindArgs));

    }
    fNOP.prototype = this.prototype; 
    fBound.prototype = new fNOP();
    return fBound;
}