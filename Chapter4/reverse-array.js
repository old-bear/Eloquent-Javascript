/**
 * Date: Tue Jun 14 11:41:52 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Reverse an array
 */

function reverseArray(arr) {
    var ret = [];
    for (var i = arr.length - 1; i >=0; --i) {
        ret.push(arr[i]);
    }
    return ret;
}

function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; ++i) {
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
}

var arr = [1, 2, 3, 4, 5];
console.log('Reverse ' + arr + ': ' + reverseArray(arr));
reverseArrayInPlace(arr);
console.log('After reverse it in place: ' + arr);
