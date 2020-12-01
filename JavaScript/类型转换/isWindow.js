/**
 * window 对象有个window属性指向自身
 */

 function isWindow(obj){
     return obj !== null && obj.window === obj;
 }