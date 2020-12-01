// 借助闭包
var Head = (function () {
    var HeadClass = function () { }; // 声明HeadClass对象，无法在外部直接调用
    var instance; // 声明一个instance对象
    return function () {
        if (instance) { // 如果已存在 则返回instance
            return instance;
        }
        instance = new HeadClass() // 如果不存在 则new一个
        return instance;
    }
})();
var a = Head();
var b = new Head();
console.log(a===b) // true
var a = HeadClass(); // 报错,HeadClass is not defined