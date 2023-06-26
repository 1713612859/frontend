/**
 * test for in 
 * test for of 
 * test foreach
 */

let R = (function () {
    let array = [];
    for (let i = 0; i < 3; i++) {
        array.push(parseInt(Math.ceil(Math.random() * i)));
    } return array;
})()

/**
 * forEach(item, index, arr) item => 每一个元素
 *                           index => 索引
 *                           arr =>数组本省
 */
R.forEach((item, index, arr) => console.log(item, index, arr))
console.log("===========================================");
for (const i in R) {
    // i 为 index
    console.log(R[i]);
}

console.log("===========================================");
for (const val in R) {
    // val 为 值
    console.log(val);
}