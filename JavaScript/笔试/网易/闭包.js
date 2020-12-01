for(var i = 0; i < 10; i++ ) {
    button.addEventListener('click', function() {
        console.log(i)
    })
}
//点击按钮之后输出的值为10个10

/*
利用闭包，延长作用域链，增加一层匿名函数的作用域链
*/


for(var i = 0; i < 10; i++ ) {
    (function(i){
        button.addEventListener('click', function() {
            console.log(i)
        })
    })(i)
}
