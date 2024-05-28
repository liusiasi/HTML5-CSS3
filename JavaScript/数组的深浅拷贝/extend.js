/**
 * 合并两个或者多个内容到第一个对象，出现相同属性的时候，后者将覆盖前者。
 */

 function extend(){
     var option,name,copy;
     var length = arguments.length;
     var target = arguments[0];
     var i = 1;
     for(;i<length;i++){
        option = arguments[i];
        if(option !=null){
            for(name in option){
                copy = option[name];
                if(copy != undefined){
                    target[name] = copy;
                }
            }
        }
     
     }
     return target;
 }

 /**
 * 合并两个或者多个内容到第一个对象，并进行深拷贝。第一个参数可以传bool值，代表是否进行深拷贝。判断是否存在第一个参数
 * 并在有相同属性值的时候判断是object进行递归深拷贝。需要判断循环拷贝
 */
function extend(){
    var option,name,copy,src;
    var i =1;
    var target = arguments[0] || {};
    if( typeof arguments[0] === "boolean"){
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    if(typeof target !== "object"){
        target = {};
    }
    for(;i<length;i++){ 
        option = arguments[i];
        if(option !==  null){
            for(name in option){
                src = target[name];
                copy = option[name];
                if(target === copy) continue
                if(deep && copy && typeof copy === "object" ){
                    target[name] = extend(deep, src, option);
                }else if(copy !== undefined){
                    target[name] = copy;
                }
            }
        }
    }
}
 