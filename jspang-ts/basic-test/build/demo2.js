"use strict";
function judgeWho(person) {
    if (person.teach) {
        person.setWork();
    }
    else {
        person.putWork();
    }
}
function judgeWhoTwo(person) {
    if ("setWork" in person) {
        person.setWork();
    }
    else {
        person.putWork();
    }
}
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
var NumberObj = (function () {
    function NumberObj(count) {
        this.count = count;
    }
    return NumberObj;
}());
function addObj(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
function adds(first, second) {
    return "" + first + second;
}
console.log(adds(1, 2));
console.log(adds('sdd', 'ddd'));
//# sourceMappingURL=demo2.js.map