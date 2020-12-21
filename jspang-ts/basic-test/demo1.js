"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str = 'hello world';
var arr = [1, "string", 2];
var xiaoJieJies = [
    { name: "Tom", age: 18 },
    { name: "Lily", age: 28 },
];
var Student = (function () {
    function Student() {
        this.name = "Tom";
        this.age = 28;
    }
    Student.prototype.say = function () {
        return '2321';
    };
    return Student;
}());
var Girl = (function () {
    function Girl() {
    }
    return Girl;
}());
var Waiter = (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Waiter.prototype.skill = function () {
        console.log('111');
    };
    return Waiter;
}(Girl));
var Students = (function (_super) {
    __extends(Students, _super);
    function Students() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Students.prototype.skill = function () {
        console.log('2222');
    };
    return Students;
}(Girl));
