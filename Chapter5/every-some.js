/**
 * Date: Tue Jun 14 17:55:24 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Implementation of every and some
 */

function every(arr, predicate) {
    for (var i = 0; i < arr.length; ++i) {
        if (!predicate(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, predicate) {
    for (var i = 0; i < arr.length; ++i) {
        if (predicate(arr[i])) {
            return true;
        }
    }
    return false;
}

var arr = [1, 2, -4, 5];
console.log('Every number in', arr, 'is positive?',
            every(arr, function(num) {
                return num > 0;
            }));
console.log('Some number in', arr, 'is even?',
            some(arr, function(num) {
                return num % 2 == 0;
            }));

