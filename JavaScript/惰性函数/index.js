/**
 * 也可以理解为单例模式，若有一个场景，只需要函数第一运行时候新建，只有一个实例
 */

/**
 * 闭包，避免全局污染
 */

var single = (function () {
    var instance = null;
    var Singleton = function () { };
    return function () {
        if (instance) return instance;
        instance = new Singleton();
        return instance;
    }
})()

/**
 * 惰性函数，新建实例之后，重写函数，不用每次进行判断
 */

var single = function () {
    var Singleton = function () { };
    var instance = new Singleton();
    single = function () {
        return instance;
    }
    return single();
}