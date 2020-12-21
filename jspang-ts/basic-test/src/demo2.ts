
interface ITeacher{
    teach:boolean;
    setWork:() => {}
}

interface IStudent{
    teach:boolean;
    putWork:() => {}
}

// 类型保护-类型断言
function judgeWho(person:ITeacher | IStudent) {
    if (person.teach) {
        (person as ITeacher).setWork();
    }else{
        (person as IStudent).putWork();
    }
}

// 类型保护-in 语法
function judgeWhoTwo(person: ITeacher | IStudent) {
    if ("setWork" in person) {
      person.setWork();
    } else {
      person.putWork();
    }
}
  
// 类型保护-typeof 语法
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }
    return first + second;
}


// 类型保护-instanceof 语法
class NumberObj {
    count: number;
    constructor(count: number) {
        this.count = count;
    }
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
      return first.count + second.count;
    }
    return 0;
}

