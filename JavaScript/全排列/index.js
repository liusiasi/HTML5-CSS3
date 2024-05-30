function permute1(nums) {
    let matrix = [];
    // 对数组进行全排列
    // 待排列数组，结果
    const subpermute = function(arr, temp) {
        // 待排序数组为0
        if (arr.length === 0) {
            matrix.push(temp);
        }

        for(let i = 0; i < arr.length; i++) {
            // 将i元素删除
            let _arr = arr.slice(0, i).concat(arr.slice(i+1));
            subpermute(_arr, temp.concat(arr[i]));
        }
    }

    subpermute(nums, []);

    return matrix;
}

console.log(permute1(['a', 'b', 'c']));