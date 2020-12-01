// 输出母字符串中的长度最大连续子字符串。

// 提示：连续字符串是 Unicode 编码连续

// 要求：
// 1.子串中不能包含母串中重复的字符
// 2.如果出现多个长度一样的最大子串，只输出左起第一个
// 3.如果不存在符合要求的子串，则输出空串

// 'abcddefg' -> 'abc'
// 'dd' -> ''

function maxstr(str){
    var str = str.split("");
    var len = str.length;
    if(len <=0 ) return '';
    var tempStr = str[0],i = 1;
    var resStr = ''
    var repeat = [];
    var map = new Map();
    str.forEach(item=>{
        if(map.has(item)) repeat.push(item);
        else map.set(item,1);
    })

    for(; i < str.length ; i++){
        if((str[i].charCodeAt() == str[i-1].charCodeAt() + 1)){
            tempStr+= str[i];
            if(tempStr.length > resStr.length){
                resStr = tempStr;
            }
        }else{
            if(tempStr.length > resStr.length){
                resStr = tempStr;
            }
            tempStr = str[i];
        }
    }

    repeat.forEach(item => {
        resStr = resStr.replace(item,"");
    });

    return resStr.length >1 ? resStr :'';
}

console.log(maxstr('abcddefg'));