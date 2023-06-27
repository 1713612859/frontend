const message = "hello world";
message.toLocaleLowerCase();

// message()




interface User {
    name: string,
    age: number,
    location?: string
    phone?: string
}

/**
 * 
 * @param user
 *  @type User
 * @returns @ty
 */
function addUser(user: User) {
    const arr: Array<User> = []
    // user.name = '张三'; user.age = 18;
    arr.push(user)
    return arr
}

const user: User = {
    name: 'zhangsan',
    age: 18
}

let arr = addUser(user)
console.log(arr);


/**
 * 
 * @param name any
 * @param age number
 */
function say(name: any, age?: number) {
    return `name is ${name} , age is ${age}`
}

console.log(say(1));

import { say2 as say3 } from "./02";
console.log(say3);

// const hello = "hello " as number

console.log(typeof arr);






