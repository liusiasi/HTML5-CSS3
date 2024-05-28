/**
 * 模拟call的实现。函数执行call可以改变this的指向，利用this指向调用函数的对象
 * 将bar.call(foo) => foo.bar();
 */

 Function.prototype.call2 = function(context){
    var context = context || window;    
    context.fn = this;
    var args = [];
    var i = 1;
    for(;i < arguments.length ; i++){
        args.push("arguments["+i+"]");
    }
    var result = eval("context.fn("+args+")");
    delete context.fn;
    return result;
 }


 var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'kevin', 18); 

