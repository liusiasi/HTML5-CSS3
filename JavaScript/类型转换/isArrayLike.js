/**
 * isArrayLike:判断数组换和类数组对象的
 */

 function isArrayLike(obj){
    var length = !!obj && "length" in obj && obj.length;
    var typeRes = type(obj);

    if(typeRes === "function" || isWindow(obj)){
        return false;
    }

    return typeRes === "array" || length === 0 ||
    typeof length === "number" && length > 0 && (length-1) in obj;
 }

 