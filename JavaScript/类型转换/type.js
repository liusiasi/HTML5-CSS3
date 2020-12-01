var classType = {};
"Boolean String Number Object Array Function Regexp Date Error".split(" ").map(function(item, index){
    classType["[object "+item+"]"] = item.toLowerCase();
})
function type(obj){
    //为解决IE6 Object.prototype.toString会将null和undefined识别为[object Object]
    if(obj == null){
        return obj+"";
    }
    //在这里也加上function判断是因为,typeof 函数 为function。但是对于Safari 5 和 Chrome 7对于正则表达式也会返回function
    return typeof obj === "object" || typeof obj === "function" ?
        classType[Object.prototype.toString.call(obj)] || 'object' : 
        typeof obj;
}

//然后在对常用的判断进行封装

function isFunction(obj){
    return type(obj) === "function";
}