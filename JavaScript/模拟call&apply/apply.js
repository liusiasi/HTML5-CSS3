/**
 * 函数调用apply改变执行的时候的this，利用函数的this指向为上一级调用函数的对象
 */

 Function.prototype.apply2 = function(context,arr){
     var context = context || window;
     context.fn = this;
     if(!arr){
        result = context.fn();
     }else{
         var args = [];
         for(var i = 0 ; i < arr.length ; i++){
            args.push("arr["+i+"]");
         }
         result = eval("context.fn("+args+")");
     }
     delete context.fn
     return result;
 }

 var foo = {
     value : 1,
 }

 var bar = function(name,years){
    console.log(name);
    console.log(years);
    console.log(this.value);
 }

 bar.apply2(foo,["hh",18]);