let node = 'lyl'


/**
 *  求和
 *
 * @param {number[]} args
 * @return {*}  {number}
 */
function sum(args: number[]): number {
    return args.reduce((pre, cur) => pre + cur)
}

let hds = () => 'hdcms'


type userType = { name: string, age: number, sex?: number | string }
function addUsers(user: userType) {
    console.log(user);

}

addUsers({ name: 'zhansgs', age: 18 })

let add = (user: userType[] | userType) => {
    if (Array.isArray(user)) {
        // do batch insert
        user.forEach(item => console.log(item))
    }
    // do insert single
}

let userArr = [{
    name: '123', age: 18
}, {
    name: '123', age: 19
}]

let singleUser = {
    name: '123', age: 18
}
// let res2 = add(singleUser)
console.log(`是数组吗?  ${add(userArr)}`);

// console.log(res2);

