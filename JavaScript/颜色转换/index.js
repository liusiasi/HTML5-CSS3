const rgba = 'rgb(255, 255, 255)';

function transfer(str) {
    let regx = /\d{1,3}/g;
    let strArr = str.match(regx);
    let result = '#';
    for (item of strArr) {
        result += Number(item).toString(16).toUpperCase();
    }
    return result;
}

console.log(transfer(rgba));