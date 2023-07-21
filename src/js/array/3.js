/**
 * test for in 
 * test for of 
 * test foreach
 */

/** @type {*} */
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


const persons = [{ name: '张三', age: 20 }, { name: 'lisi', age: 18 }, { name: '张三2', age: 18 },]

persons.forEach(item => {
    console.log(item);
})



for (let index = 0; index < persons.length; index++) {
    // console.log(persons[index]['name'], persons[index]['age']);
    console.log(persons[index].name, persons[index].age);
}