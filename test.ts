"use strict";
class Person {
    hobby: string;
    constructor(hobby: string) {
        this.hobby = hobby;
    }
    echo() {
        return '我就喜欢: ' + this.hobby;
    }
    echo2(arg: string, arg2: string, showEnum: boolean) {
        return '我就喜欢: ' + this.hobby + arg + arg2 + " | " + (showEnum ? Color.Red : Color.Blue);
    }
}

enum Color {
    Red,
    Green,
    Blue
}


let person = new Person('看书 ');
let hobby: string = person.echo();

// console.log(hobby);

console.log(person.echo2(' arg2', ' arg3', true));

console.log(person.echo2(' arg2', ' arg3', false));



var testVer;

// console.log(testVer);

// console.log(typeof testVer);


var testVer2 = null;

// console.log(testVer2);

// console.log(typeof testVer2);

var path: string[] | string;
path = 'path1';
// console.log(path);

path = ['path1', 'path2'];

// console.log(path);

var num: number = 2;

// console.log(num);


// var xx : any = {};

// if(typeof xx === 'string'){
//     console.log(xx.slice(3, 1));
// }

// xx.foo();

// console.log()

interface ICustomConsole {
    log(arg: string): void;
}

declare var cc: ICustomConsole;

// cc.log('from interface');


function fun(a: number, b: number, cb: (arg: number) => void): number {
    cb(a + b);
    return a + b;
}


var fun2 = function (a: number, b: number, cb: (arg: number) => void): number {
    cb(a + b);
    return a + b;
}

var fun3 = (a: number, b: number, cb: (arg: number) => void) => {
    cb(a + b);
    return a + b;
}

var greet: (name: string) => string = function (name: string): string {
    if (name) {
        return 'Hi ' + name;
    }
    else {
        return 'Hi ';
    }
}

// console.log(greet('xxxx'));


interface UserInter {
    name: string;
    pwd: string;
}

var usr: UserInter = {
    name: "",
    pwd: "p"
}


var gg: (name: string) => string;

gg = function (name: string) {
    return "";
}

var gg1: (name: string) => string = function (name: string) {
    return name;
}

var gg2: (name: string) => string = (name: string): string => {
    return name;
}

function add2(foo: number, bar: number = 8, foobar: number = 9): number {
    if (foobar) {
        return foo + bar + foobar;
    }
    return foo + bar;
}


console.log(add2(1));


function add3(...foo: number[]): number {
    var rslt = 0;
    for (let index = 0; index < foo.length; index++) {
        rslt += foo[index];
    }

    return rslt;
}


console.log(add3(1, 2, 3, 4));


function test(name:string):string;
function test(name:boolean):string;

// function test(val:any):string{
function test(val:(string | boolean)):string{
    switch(typeof val){
        case 'string':
            return `my name is ${val}`;
        case 'boolean':
            return `my age ${val}`;
        default:
            return 'invalid';
    }
}

console.log(test('大王'));
console.log(test(false));


class Counter{
    private _i : number = 10;

    // constructor(){
    //     this._i = 0;
    // }

    get():number{
        return this._i;
    }
}

let ct = new Counter();
console.log(ct.get());


