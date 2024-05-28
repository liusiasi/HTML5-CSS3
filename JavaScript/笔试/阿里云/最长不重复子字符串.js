

var lengthOfLongestSubstring = function(s) {
    let result = '';
    let tempResult = '';
    for(let i=0; i<s.length; i++){
        if(tempResult.indexOf(s[i]) == -1) {  // 当tempResult中不含有s[i]时
            tempResult += s[i];       // 所有不重复的字符放入tempResult中
            if(tempResult.length > result.length) {  //当tempResult的长度大于result的长度时 使result=tempResult
            result = tempResult;
            }
        } else {                                // 当tempResult中含有s[i]时
            if(tempResult.length > result.length) {
                result = tempResult;
            }
            let index = tempResult.indexOf(s[i]);  //返回tempResult 重复的位置
            tempResult = tempResult.slice(index+1) + s[i];  //  当出现重复字符时对tempResult 重新赋值 从重复的字符之后到结束加上重复的字符
        }
    }
    return result ;
}

console.log(lengthOfLongestSubstring('abcddefgl'));