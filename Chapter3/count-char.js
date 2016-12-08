/**
 * Date: Tue Jun 14 10:45:49 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Count a specific character in a string
 */

function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, ch) {
    var count = 0;
    for (var i = 0; i < str.length; ++i) {
        if (str.charAt(i) == ch) {
            count++;
        }
    }
    return count;
}

console.log('There are ' + countBs('BUBBLE') + " `B's inside `BUBBLE'");
console.log('There are ' + countChar('implementation', 'e')
            + " `e's inside `implementation'");
