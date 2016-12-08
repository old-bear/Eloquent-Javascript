/**
 * Date: Sun May 22 17:50:53 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Implementation of Math.min
 */

function min(op1, op2) {
    return op1 < op2 ? op1 : op2;
}

console.log('min(3, 5) = ' + min(3, 5));
console.log('min(\'a\', \'z\') = ' + min('a', 'z'));
console.log('min(Math.sqrt(2), Math.sin(2)) = '
            + min(Math.sqrt(2), Math.sin(2)));

