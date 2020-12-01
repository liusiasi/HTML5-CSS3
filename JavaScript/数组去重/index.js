//es6
var arr = [1, '1', 1, NaN, NaN];

function unique(array){
    return Array.from(new Set(array));
}

function unique(array){
    return [...new Set(array)];
}

function unique(array){
    var seen = new Map();
    return array.filter(item => !seen.has(item) && seen.set(item, 1));
}



//可以去除重复的对象
var array = [{value: 1}, {value: 1}, {value: 2}];

function unique(array) {    
    var obj = {};
    return array.filter(function(item, index, array){
        console.log(typeof item + JSON.stringify(item))
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}


console.log(unique(array)); // [{value: 1}, {value: 2}]