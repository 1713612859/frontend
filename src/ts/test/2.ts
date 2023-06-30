/**
 * 测试参数限定
 * @param name "abc" | "abc2" | "abc3"
 * @returns  name
 */
function test(name: "abc" | "abc2" | "abc3") {
    return name
}


console.log(
    test("abc2"));


