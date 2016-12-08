/**
 * Date: Wed Jun 15 13:51:27 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Replace single quote with double quote
 */

var text = "'I'm the cook,' he said, 'it's my job.'";
console.log("Source text:", text);
console.log("Replace to use double quote:",
            text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
