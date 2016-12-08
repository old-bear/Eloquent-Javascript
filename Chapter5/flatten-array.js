/**
 * Date: Tue Jun 14 15:50:27 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Flatten an array of arrays
 */

function flattenArray(arr) {
    return arr.reduce(function(flatArr, elem) {
        return flatArr.concat(elem);
    });        
}

var arr = [[1], [2, 3], ['hello']];
console.log(arr, '=>', flattenArray(arr));
