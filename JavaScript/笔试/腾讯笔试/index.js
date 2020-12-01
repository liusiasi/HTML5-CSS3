/**
 * 实现sum函数sum(1,2)(3).result = 6
 */

function sum(){
    var args = [].slice.call(arguments);
    var funcRes = function(){
        args.push(...arguments);
        return funcRes;
    }
    
    funcRes.result = new Function();
    funcRes.result.toString = function(){ 
      return args.reduce((a,b)=>{return a+b;});       
    }
    return funcRes;
  }
  sum(1,2).result


  /**
 * 链式调用
 */

 function factory(){
     
 }
 function GoodMan(tom){
     return new factory();
 }

 factory.prototype.say= function(){
     console.log("jj");
     return this;
 }

 factory.prototype.en= function(){
    console.log("en");
    return this;
}

GoodMan("hh").say("ll").en("nn");

