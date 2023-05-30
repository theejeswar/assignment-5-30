//practice
function messg() {
    console.log('How are you doing');
    console.log('how have you been');
    console.log('Where have you been');
}
messg();

function greet(name) {
    console.log(name);
    console.log('Hi');
}
greet('alex');

function rollDie() {
    let roll = Math.floor(Math.random() * 6 + 1);
    console.log(`Rolled: ${roll}`);
}
function throwDice(num) {
    for (var i = 0; i < num; i++) {
        rollDie();
    }
}
throwDice(12);

function isValidPassword(password, username) {
    if (password.length >= 8) {
        return false;
    }
    if (password.indexOf(" ") !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}
let x = isValidPassword('sihbgilusr', 'theoithgoe');
console.log(x);

function isValidPassword(password, username) {
    if ((password.length < 8) && (password.indexOf(" ") !== -1) && (password.indexOf(username) !== -1)) {
        return false;
    }
    return true;
}
let y = isValidPassword('aefgasgfasg', 'awrgawrgawr');
console.log(y);

let arr = [12, 63, 95, 25, 21, 43];
let sum = function (arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return (sum / arr.length);
}
let z = sum(arr);
console.log(z);

//exercise
//exercise 1
var added = function (x, y) {
    let z = x + y;
    return z;
}
let output = added(10, 15);
console.log(output);

//exercise 2
function f1(math, math1, x, y) {
    let result = math(x, y);
    let result0 = math1(x, y);
    return [result, result0];
}
let add = function (x, y) {
    let a = x + y;
    return a;
}
let sub = function (x, y) {
    let b = x - y;
    return b;
}
let mul = function (x, y) {
    let c = x * y;
    return c;
}
let div = function (x, y) {
    let d = x / y;
    return d;
}
let result1 = f1(add, div, 15, 12);
console.log(result1);

//exercise 3
let func = function (i, j) {
    if (i < j) {
        console.log("i is smaller value");
    } else {
        console.log("j is smaller value");
    }
    return function (g) {
        for (var h = 1; h <= 10; h++) {
            let k = g * h;
            console.log(g + "x" + h + "=" + k);
        }
    }

}
let r1 = func(10, 5);
let r2 = r1(5);
console.log(r2);

//exercise 4 
let good = (s, t) => {
    return s + t;
}
let output1 = good(2, 3);
console.log(output1);
