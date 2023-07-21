
let arr = [1, 2, 3, 4, 5]
let res = arr.find((v, idx, arr) => { // 找到第一个匹配表达式的值,即返回该值
    return v > 3
});
console.log(res);


let arr2 = arr.filter(val => val > 3)// 过滤掉不匹配的元素,然后将符合表达式的元素重新组合成一个新的数组;
console.log(arr, arr2);

let map = new Map();

map.set(1, 2)
map.set(3, 4)
map.set(5, 6)
map.set(7, 8)
console.log('============================================');

for (const [key, val] of map.entries()) { // forof entries() 
    console.log(key, val);
}
console.log('============================================');
for (const key of map.keys()) { // forof keys()
    console.log(key, map.get(key));
}
console.log('============================================');
for (const value of map.values()) { // forof values()
    console.log(value);
}
console.log('============================================');

for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
console.log('============================================');


function test() {
    return [1, 2, 3, 4, 5];
}
let [first, ...args] = test();
console.log(first, args);


/**
 *
 *
 * @return {*} 
 */
function returnObject() {
    return {
        username: '张三',
        age: 18,
        birthday: '2020-11-22'
    }
}

let obj = returnObject()
let { username, age } = returnObject()
console.log(username, age);

console.log(obj);
console.log(obj["username"], obj["age"]);