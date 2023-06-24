/**
 * 
 * @param age number
 * @returns adult | no adult
 */
function sayHello(age: number) {
    if (age >= 18) return '"adult"'
    return 'no adult'
}

console.log(sayHello(555));


function catName(params: Array<any>) {
    params.forEach(element => {
        console.log(element);
    });
}

catName([1, 5, 6, 9, 8, 3, 6])


function bibao(): number {
    return 100;
}

let res = bibao()

console.log(res);
