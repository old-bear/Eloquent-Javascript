/**
 * Date: Tue Jun 14 10:37:55 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Tell whether a number is even
 */

function isEven(num) {
    if (num < 0) {
        return isEven(-num);
    } else if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log('isEven(50): ' + isEven(50));
console.log('isEven(75): ' + isEven(75));
console.log('isEven(-1): ' + isEven(-1));
