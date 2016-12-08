/**
 * Date: Tue Jun 14 11:04:34 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Implementation range and sum
 */

function range(start, end, step) {
    if (step == null) {
        step = 1;
    }
    if ((end - start) * step < 0) {
        return [];
    }
    var ret = [];
    var sign = (start > end ? -1 : 1);
    for (var i = start; i*sign <= end*sign; i += step) {
        ret.push(i);
    }
    return ret;
}

function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; ++i) {
        total += numbers[i];
    }
    return total;
}

console.log('sum of range(1, 10, 2) = ' + sum(range(1, 10, 2)));
console.log('sum of range(5, 2, -1) = ' + sum(range(5, 2, -1)));
console.log('sum of range(1, 10) = ' + sum(range(1, 10)));
