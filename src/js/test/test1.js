// const name = 'zhangsan'
// const name2 = 'zhangsan'

// console.log(String.prototype);

// var name = "The Window";

// var object = {
//     name: "My Object",

//     getNameFunc: function () {
//         var that = this;
//         return function () {
//             console.log(that);
//             return that.name;
//         };

//     }

// };

// console.log(object.getNameFunc()());


// var name = "The Window";

// var object = {
//     name: "My Object",

//     getNameFunc() { return () => this.name; }

// };

// console.log(object.getNameFunc()());


var test = {
    name: 'test',

    getName() {
        return this.name

    }

    //  getName:()=> {  // 获取this.name 失败的原因是 this指的是当前匿名函数 ,但是当前this是一个Function 没有name属性
    //     return this.name

    // }
}

console.log(test.getName());