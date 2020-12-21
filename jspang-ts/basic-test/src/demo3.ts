// 范型
function adds<T>(first:T, second: T) {
    return `${first}${second}`;
}

console.log(adds<number>(1,2))
console.log(adds<string>('sdd','ddd'))

// 范型中数组的使用
// 写法一
function myFun<T>(arr:T[]){
    return arr.map((item:T)=>item)
}
// 写法二
function myFuns<T>(params:Array<T>) {
    return params
}

const arrs1 = myFun<number>([1,2,3])
console.log(arrs1)

const arrs2 = myFun<string>(['dd','d343','fsdf'])
console.log(arrs2)

const arrs3 = myFun<boolean>([false,true,false])
console.log(arrs3)



// 多个范型的定义
function join<T,P>(params1:T, params3:P,params2:P){
    return `${params1}${params2}${params3}`
}
console.log(join<string,number>('str',3,5))


// 初始类的泛型
class SelectGirl<T> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
}
  
const selectGirl = new SelectGirl(["Lily", "Mary", "Molly"]);
console.log(selectGirl.getGirl(1));
  
// 泛型中的继承
interface IGril{
    name:string;
}
class SomeGril <T extends IGril>{
    constructor(private girls: T[]){}
    getGirl(index: number): string {
        return this.girls[index].name;
    }
}

const girls = new SomeGril([
    {name:"Mary"},
    {name:"Mary1"},
    {name:"Mary2"},
])

console.log(girls.getGirl(1));

// 泛型约束
class Girls<T extends (number | string)> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
}
  
const grilss = new Girls<string>(["Lily", "Mary", "Molly"]);
const grilss1 = new Girls([1, "Mary", "Molly"]); // 这种也不报错

console.log(grilss1.getGirl(1));


// 普通方法中
function myFunc<T extends (number | string)>(params:Array<T>) {
    return params
}

const arrs21 = myFunc([1,'d343','fsdf'])
console.log(arrs21)