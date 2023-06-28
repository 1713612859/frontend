/**
 * 
 * @param name any
 * @param age number
 */
export function say2(name: any, age?: number) {
    return `name is ${name} , age is ${age}`
}


class Student {
    name: string;
    stuNo: string;
    age: number;

    study(name: string) {
        console.log(`I'm ${name} , I can study`);
    }
}

const stu = new Student();
stu.name = 'stuname'
stu.age = 15
stu.stuNo = 'ZK001'

stu.study(stu.name)
console.log(stu);
