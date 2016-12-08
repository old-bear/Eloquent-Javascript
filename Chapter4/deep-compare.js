/**
 * Date: Tue Jun 14 14:37:31 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Deep compare
 */

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || typeof a != 'object'
        || b == null || typeof b != 'object') {
        return false;
    }

    var propsInA = 0;
    var propsInB = 0;
    for (var key in a) {
        propsInA++;
    }
    for (var key in b) {
        propsInB++;
        if (!(key in b) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return propsInA == propsInB;
}

var a = {key1: 'hello', key2: [1, 2], key3: null}
var b = {key1: 'hello', key2: [1, 2], key3: null}
var c = {key1: 'hello', key2: [1, 2], key3: undefined}
var d = {key1: 'hello', key2: [1, 2], key3: null, key4: 'hehe'}
console.log('1:', a, deepEqual(a, b) ? "equals" : "doesn't equal", b);
console.log('2:', a, deepEqual(a, c) ? "equals" : "doesn't equal", c);
console.log('3:', a, deepEqual(a, d) ? "equals" : "doesn't equal", d);

