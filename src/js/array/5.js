// "use strict";
// "use strict";
const arr = [1, 2, 3, 4, 5, 6, 7]

console.log();
console.log();
// 倒序
let newArr = arr.sort((a, b) => b - a)
console.log(newArr);

// 正序
let newArr2 = arr.sort((a, b) => a - b)
console.log(newArr2);



const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
];

const sortStudent = students.sort((preGrade, currGrade) => preGrade.grade - currGrade.grade)

console.log(sortStudent);


const arrs = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
console.log(arrs.sort(compareFn));



const obj = {
    name: '张三',
    age: 15
}
// 对象冻结  意味着对象不可变
let res = Object.freeze(obj)

obj.name = "xxxx"

console.log(obj.name);


// 浅克隆
// true 
console.log(res === obj);

res.name = 'xxx'