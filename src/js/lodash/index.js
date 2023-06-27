/**
 * lodash js处理函数集合
 */
import _ from 'lodash'

// .chunk: 返回一个包含拆分区块的新数组（注：相当于一个多维数组）。
console.log(_.chunk([1, 23, 4, 23, 5, 6], 2)) //[ [ 1, 23 ], [ 4, 23 ], [ 5, 6 ] ]

// .compact(array) 过滤所有假值 0 ,false,undefined,NaN
console.log(_.compact([0, false, 1, undefined, NaN, 555, true])) //[ 1, 555, true ]

// .concat() 将括号内的所有值,合并成一个新数组
console.log(_.concat(1, 53, undefined, 6, [[12], 555, undefined]));//[ 1, 53, undefined, 6, [ 12 ], 555, undefined ]

// .difference(array,[values])创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
console.log(_.difference([2, 3], [2, 3, 4]));

// .isObject(any) 判断是否为Object 为真=true 为假 false 
console.log(_.isObject(5));