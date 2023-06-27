/**
 * monent 日期格式化插件
 */
import moment from "moment";

let parseStr = moment().format('YYYY-MM-DD')
let parseStr2 = moment('20201024').format('YYYY-MM-DD')

console.log(parseStr);
console.log(parseStr2);

console.log(typeof parseStr);


console.log(moment().format('2020-11-11'));


console.log(moment().parseZone());