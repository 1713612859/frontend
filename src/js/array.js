import { sayHello } from '../index.js'

console.log(sayHello(5));
sayHello();

/**
 *
 * @returns number
 */
function Closures() {
    let number = 5
    return function () {
        console.log(++number)
        return number
    }
}

let b1 = Closures()
b1()
b1()
b1()
b1()
let b2 = b1
b2()
b2()
b2()
