/**
 * Date: Wed Jun 15 14:31:37 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview A regexp represent JS numbers
 */

function validateNumber(num) {
    console.log(num, (/^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/
                      .test(num) ? 'is' : 'is not'), 'a valid JS number');
}

validateNumber('.5');
validateNumber('5.');
validateNumber('.');
validateNumber('1e-10');
validateNumber('13.1.3');
validateNumber('+1e+');
