// 代码整个放在一个立即执行函数里面】

(function(){
  // 用来缓存，有时候一个模板要用多次，这时候，我们直接用缓存就会很方便  
  var cache = {};
    // tmpl绑定在this上，这里的this值得是window
  this.tmpl = function tmpl(str, data){
       // 只有模板才有非字母数字字符，用来判断传入的是模板id还是模板字符串，    // 如果是id的话，判断是否有缓存，没有缓存的话调用tmpl；    // 如果是模板的话，就调用new Function()解析编译
    var fn = !/\W/.test(str) ? 
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
    
      new Function("obj",　　　　 // 注意这里整个是字符串，通过 + 号拼接
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +
       
        str　　　　　　// 去除换行制表符\t\n\r
          .replace(/[\r\t\n]/g, " ") 　　　　　　　　　　　　// 将左分隔符变成 \t
          .split("<%").join("\t") 　　　　　　　　　　　　// 去掉模板中单引号的干扰
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")　　　　　　　　　　　　// 为 html 中的变量变成 ",xxx," 的形式, 如：\t=users[i].url%> 变成  '，users[i].url,'  　　　　　　// 注意这里只有一个单引号，还不配对 
          .replace(/\t=(.*?)%>/g, "',$1,'")  　　　　　　　　　　　　// 这时候，只有JavaScript 语句前面才有 "\t",  将  \t  变成   '); 　　　　　　// 这样就可把 html 标签添加到数组p中，而javascript 语句 不需要 push 到里面。　　　　　　.split("\t").join("');") 　　　　　　　　　　　　// 这时候，只有JavaScript 语句后面才有 "%>", 将 %> 变成  p.push(' 　　　　　　// 上一步我们再 html 标签后加了 ');， 所以要把 p.push(' 语句放在 html 标签放在前面，这样就可以变成 JavaScript 语句
          .split("%>").join("p.push('") 
         　　　　　　// 将上面可能出现的干扰的单引号进行转义 　　　　　 .split("\r").join("\\'")　　　　// 将数组 p 变成字符串。
      + "');}return p.join('');");
   
    return data ? fn( data ) : fn;
  };
})();