/**
 * 首先对基本类型进行判断
 */
function eq(a, b){
    //判断两个基本类型相等，排除-0和+0
    if(a === b) return a!=0 || 1/a === 1/b;
    //排除类型检测为object
    if(a === null || b === null) return false;

    if(a !== a) return b !== b;

    var type = typeof a;
    //当a为基本类型的时候 b不是对象就直接返回false，因为这里要保留判断'Curly' 和 new String('Curly') 相等
    if(type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    // 更复杂的对象使用 deepEq 函数进行深度比较
    return deepEq(a, b);
}

/**
 *对象有很多种，判断String对象，Regexp对象，使用隐式类型转换转换成字符串；Boolean、Number和对象采用隐式类型转换，转换成数字

 */         

function deepEq(a,b){
    var toString = Object.prototype.toString;
    var className = toString.call(a);
    if(className != toString.call(b)) return false;
    //判断 String Regexp Number Date Boolean对象
    switch(className) {
        case '[object String]':
        case '[object RegExp]':
            return ''+a === ''+b;
        case '[object Number]':
            if(+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / +b : +a === +b;
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
    }
    //判断 Function Object Array 这里过滤

    var areArrays = classname === '[object Array]';
    //判断构造函数,构造函数都存在，过滤两个构造函数不相等的情况
    if(!areArrays){
        //过滤掉两个函数情况
        if(typeof a !== 'object' && typeof b !== 'object') return false;
        var aCtor = a.constructor,bCtor = b.constructor;
        if(aCtor !== bCtor && !(isFunction(aCtor)&&aCtor instanceof aCtor&&isFunction(bCtor)&&bCtor instanceof bCtor))
        return false;
    }
    //接下来对数组和对象判断
    if(areArrays){
        length = a.length;
        if (length !== b.length) return false;

        while (length--) {
            if (!eq(a[length], b[length])) return false;
         }
    }else{
        var keys = Object.keys(a), key;
        length = keys.length;

        if (Object.keys(b).length !== length) return false;

        while (length--) {
            key = keys[length];
            if (!(b.hasOwnProperty(key) && eq(a[key], b[key]))) return false;
        }
    }

    return false;
}



