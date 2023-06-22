const array = [];

let R = (function () {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(parseInt(Math.ceil(Math.random() * i)));
    }
    return array;
})()


console.log(R);
// 数组求和
// let res = R.reduce((pre, cur, index, arr) => {
//     return pre + cur
// }, 0)

// console.log(res);
// 过滤
let res2 = R.filter(item => item >= 3);
// console.log(res2);

// 填充
let res3 = R.fill(6, 6, 9);
// console.log(res3);

// 判断是否包含某个元素值
let res4 = R.includes(9);
// console.log(res4);


// 对数组的每个元素调用定义的回调函数，并返回包含结果的数组。
let res5 = R.map(item => item * 2)
console.log(res5);