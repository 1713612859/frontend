import moment from "moment";

let parseStr = moment().format('YYYY-MM-DD')
let parseStr2 = moment('20201024').format('YYYY-MM-DD')

console.log(parseStr);
console.log(parseStr2);

console.log(typeof parseStr);