const str: string = 'hello world'
const arr: (number | string)[] = [1, "string", 2]

// 类型
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "Tom", age: 18 },
  { name: "Lily", age: 28 },
];

interface Person{
    name:string
    age:number
    say():string
}
  
class Student implements Person {
    name="Tom"
    age = 28
    say(){
        return '2321'
    }
}

// 抽象类
abstract class Girl {
    abstract skill():void; //因为没有具体的方法，所以我们这里不写括号
}
class Waiter extends Girl {
    skill() {
        console.log('111');
    }
}
class Students extends Girl {
    skill() {
        console.log('2222');
    }
}


function test (val:any){
    return val
}
