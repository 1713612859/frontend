/**
 * 
 * @param {number} age 
 * @requires age
 */
export function sayHello(age) {
    console.log('sayHello....');
    return age;
}


const obj = { name: 'zhangsan', age: 18, date: new Date() }

const a = structuredClone(obj)

console.log(a);
