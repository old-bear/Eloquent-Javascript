/**
 * Date: Wed Jun 15 10:29:19 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Basic try/catch operation
 */

function MultiplicatorUnitFailure() {
    this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }        
}

var a = 3;
var b = 4;
for (;;) {
    try {
        console.log('Try ' + a + ' * ' + b + ':');
        var c = primitiveMultiply(a, b);
        console.log('Got it, the answer is ' + c);
        break;
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            console.log('Failed, retry');
        } else {
            throw e;
        }
    }
}
