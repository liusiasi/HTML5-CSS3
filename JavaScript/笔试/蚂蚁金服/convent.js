// 题目 3：实现一个 convert 函数, 接收一个10进制整数n (n >= 0)，转化为7进制数（用字符串表示）。例如 7转化为'10'，2019转化为'5613'。
function convent(n) {
    let res = '';
    while(n){
        res = (n%7)+res;
        n = Math.floor(n/7);
    }
    return res;
}

console.log(convent(7));
