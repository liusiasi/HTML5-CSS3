var sameStr = function(str){
    var res = str.match(/(\w)\1*/g);
    res.sort(function(a,b){
        return b.length - a.length;
    });
    return res[0];
}
console.log(sameStr("BBBBCCAAA"));