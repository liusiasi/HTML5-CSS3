/**
 * 数组浅拷贝 cancat slice
 */


var array = ['old', 1, true, undefined, null];
var new_array = array.concat();
var new_array1 = array.slice();

new_array[0] = 'new';
new_array1[1] = 2;

console.log(array) // ["old", 1, true, null, undefined]
console.log(new_array) // ["new", 1, true, null, undefined]
console.log(new_array1) // ["old", 2, true, null, undefined]

/**
 * 深拷贝，对象和数组。这样有一个问题就是不能拷贝函数，还可以利用concat或者slice进行拷贝
 */
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

var new_arr = JSON.parse( JSON.stringify(arr) );

console.log(new_arr);

/**
 * 手动实现，对象的浅拷贝，只需要将属性和属性值都放到一个新的对象当中
 */
function shallowCopy(obj){
    //判断是否是对象
    if(typeof obj != 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/**
 * 手动实现，对象的深拷贝，每次拷贝的时候判断一下属性值的类型，如果是对象就递归调用深拷贝
 */

 function deepCopy(obj){
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
 }
 /**
  * 避免循环引用,使用一个数组来存储已经克隆过的对象。每次克隆值的时候判断是否存在过该对象。
  */


function isObject(obj){
    return typeof obj === 'object' && obj !== null;
}
function findObj(obj,objList){
    for(value of objList){
        if(obj === value) {
            console.log('ww');
            return true;
        }
    }
    return false;

}
function deepClone(obj,objList){
    if(!isObject(obj)) return obj;
    var copy = Array.isArray(obj) ? [] : {};
    var objList = objList || [];
    var findRes = findObj(obj,objList);
    if(findRes) return undefined;
    objList.push(obj);
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key],objList);
        }
    }
    return copy;
}

var obj = { foo: { bar: { baz: { qux: {} } } } };
obj.foo.bar.baz.qux = obj.foo;

var copyObj = deepClone(obj);