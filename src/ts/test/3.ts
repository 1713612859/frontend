interface Animal {
    name: string,
    age: number,
    date: Date
}



function show(params: Animal) {
    console.log(typeof params);

    console.log(params);

}

// show({ name: 'zhangsan', age: 18, date: new Date() })

const obj = { name: 'zhangsan', age: 18, date: new Date() }

const a = structuredClone(obj)

console.log(a);
