const message = "hello world";
message.toLocaleLowerCase();

// message()




interface User {
    name: string,
    age: number,
    location?: string
    phone?: string

    say(): void
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
    age: 18,
    say() {

    },
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

/**
 * 斐波拉契数列 1 1 2 3 5
 * @param arr 
 * @returns 
 */
function fibonacci(arr: number): any {
    if (arr <= 1) {
        return arr;
    }
    return fibonacci(arr - 2) + fibonacci(arr - 1);
}

console.log('fibonacci', fibonacci(20));




