/**
 *
 *
 * @param {boolean} arg
 * @return {*} 
 */
function hd(arg: boolean) {
    return arg ? 'I do' : 'no do'
}

const result = hd(true)
console.log(result);

// async function a(params: string) {

//     setTimeout(() => {
//         console.log(params);
//     }, 1000);
// }

// await a('fuck')



const arr = ['string', 'araay'] as const

console.log(arr[0]);


let jd = 'jingdong'
jd = "undefined"