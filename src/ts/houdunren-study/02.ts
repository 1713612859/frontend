
/**
 *性别: 枚举  0 男, 1 女 ,2 未知
 * 默认值是从0开始的
 * @enum {number}
 */
enum SexType {
    MALE,
    FEMALE,
    UNKOWN
}

console.log(SexType.MALE);
console.log(SexType.FEMALE);
console.log(SexType.UNKOWN);

type userInfoType = { name: string, age: number, sex: SexType }
function addUser(user: userInfoType): void {
    console.log(user);

}

let user = addUser({ name: '张三', age: 18, sex: SexType.MALE })