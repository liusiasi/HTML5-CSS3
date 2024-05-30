// ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
// 给定一个版本号进行排序
// 判断每一位大小，大于则排序，都相同则看长度
const arr = ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5'];
function sortArr(arr) {
    arr.sort((a, b) => {
        let aArr = a.split('.');
        console.log(aArr);
        let bArr = b.split('.');
        let k = 0;
        while(k < aArr.length && k < bArr.length) {
            let i = aArr[k];
            let j = bArr[k];
            k++;
            if (i !== j) {
                return i - j;
            }
        }
        return aArr.length - bArr.length;
    })
}
sortArr(arr);
console.log(arr);