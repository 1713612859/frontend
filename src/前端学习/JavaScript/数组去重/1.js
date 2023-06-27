const array = [1, '1', 2, '2', 1]


var set = new Set(array)
const arr = [...set]

console.log(arr);


function unique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(unique(array));


/**
 * 判断是否是Object
 */
function isObject(params) {
    return typeof params === 'object' || typeof params.prototype === Object ? true : false
}


console.log(isObject(unique));