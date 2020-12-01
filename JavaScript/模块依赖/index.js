/**
 * AMD是requireJs在推广过程中的产出，define函数，第一个参数是依赖模块，第二个参数是模块内容，是一个函数
 * 推崇依赖前置，提前加载，所有需要的模块必须加载完才能执行
 */

 define([
     'package/lib',
     'dependency'
 ], function(lib) {
     'use strict';
     return {
        lib,
     }
 });

 /**
  * 模块引入，使用require函数，第一个参数依赖的模块，第二个参数模块的内容
  */

  require([math,jquery],function(math,$){
    var sum = math.add(1,2);
  })


  /**
   * CMD是seaJs在推广过程中的产物，
   * 推崇依赖就进，推迟加载，使用的时候在加载，使用require的时候才加载模块
   */

   define(function(require,exports,module){
       var math = require('./math');
       var add = function(a,b){
           return math.add(a,b);
       }
       exports.add = add;

   });