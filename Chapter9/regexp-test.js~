/**
 * Date: Wed Jun 15 11:45:13 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Exercises of writing regexp
 */

function verify(regexp, arrStr) {
    arrStr.forEach(function(str) {
        console.log('`' + str + '\''
                    + (regexp.test(str) ?
                       " matches " : " doesn't match ") + regexp);
    });
}

verify(/ca[rt]/, ['my car', 'cat paw']);
verify(/pr?op/, ['popular', 'propose', 'port']);
verify(/ferr(it|y|ari)/, ['ferrit', 'ferry', 'ferrari', 'ferri']);
verify(/ious\b/, ['precious', '23-6ious', 'cautiously']);
verify(/\s[.,:;]/, ['hello world', 'list :', 'hi, John']);
verify(/\w{7,}/, ['corresponding', 'hello, world']);
verify(/\b[a-d|f-z]+\b/, ['wedding', '  ', 'new[]', 'function']);
