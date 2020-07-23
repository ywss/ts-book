"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Person = /** @class */ (function () {
    function Person(hobby) {
        this.hobby = hobby;
    }
    Person.prototype.echo = function () {
        return '我就喜欢: ' + this.hobby;
    };
    Person.prototype.echo2 = function (arg, arg2, showEnum) {
        return '我就喜欢: ' + this.hobby + arg + arg2 + " | " + (showEnum ? Color.Red : Color.Blue);
    };
    return Person;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var person = new Person('看书 ');
var hobby = person.echo();
// console.log(hobby);
console.log(person.echo2(' arg2', ' arg3', true));
console.log(person.echo2(' arg2', ' arg3', false));
var testVer;
// console.log(testVer);
// console.log(typeof testVer);
var testVer2 = null;
// console.log(testVer2);
// console.log(typeof testVer2);
var path;
path = 'path1';
// console.log(path);
path = ['path1', 'path2'];
// console.log(path);
var num = 2;
// cc.log('from interface');
function fun(a, b, cb) {
    cb(a + b);
    return a + b;
}
var fun2 = function (a, b, cb) {
    cb(a + b);
    return a + b;
};
var fun3 = function (a, b, cb) {
    cb(a + b);
    return a + b;
};
var greet = function (name) {
    if (name) {
        return 'Hi ' + name;
    }
    else {
        return 'Hi ';
    }
};
var usr = {
    name: "",
    pwd: "p"
};
var gg;
gg = function (name) {
    return "";
};
var gg1 = function (name) {
    return name;
};
var gg2 = function (name) {
    return name;
};
function add2(foo, bar, foobar) {
    if (bar === void 0) { bar = 8; }
    if (foobar === void 0) { foobar = 9; }
    if (foobar) {
        return foo + bar + foobar;
    }
    return foo + bar;
}
console.log(add2(1));
function add3() {
    var foo = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        foo[_a] = arguments[_a];
    }
    var rslt = 0;
    for (var index = 0; index < foo.length; index++) {
        rslt += foo[index];
    }
    return rslt;
}
console.log(add3(1, 2, 3, 4));
// function test(val:any):string{
function test(val) {
    switch (typeof val) {
        case 'string':
            return "my name is " + val;
        case 'boolean':
            return "my age " + val;
        default:
            return 'invalid';
    }
}
console.log(test('大王'));
console.log(test(false));
var Counter = /** @class */ (function () {
    function Counter() {
        this._i = 10;
    }
    // constructor(){
    //     this._i = 0;
    // }
    Counter.prototype.get = function () {
        return this._i;
    };
    return Counter;
}());
var ct = new Counter();
console.log(ct.get());
var html = htmlEscape(__makeTemplateObject(["<h1>", " ", "</h1>"], ["<h1>", " ", "</h1>"]), name, summary);
tag.apply(void 0, __spreadArrays([literals, string[]], values, [any[]]));
string;
function htmlEscape(literals) {
    var placeholders = [];
    for (var _a = 1; _a < arguments.length; _a++) {
        placeholders[_a - 1] = arguments[_a];
    }
    return '';
}
