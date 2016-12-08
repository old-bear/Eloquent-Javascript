/**
 * Date: Tue Jun 14 12:17:19 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview List structure
 */

function prepend(element, list) {
    return {value: element, rest: list};
}

// zero-based index
function nth(n, list) {
    if (n < 0) {
        return undefined;
    } else if (n == 0) {
        return (list ? list.value : undefined);
    } else {
        if (!list || !list.rest) {
            return undefined;
        } else {
            return nth(n - 1, list.rest);
        }
    }
}

function arrayToList(arr) {
    var list = null;
    for (var i = 0; i < arr.length; ++i) {
        list = prepend(arr[i], list);
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var i = 0, element = nth(i, list);
         element != null; ++i, element = nth(i, list)) {
        arr.push(element);
    }
    return arr;
}

var arr = [1, 2, 3];
var list = arrayToList(arr);
console.log('Convert', arr, 'to list:', arrayToList(arr));
console.log('Convert', list, 'to array:', listToArray(list));
