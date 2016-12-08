/**
 * Date: Fri Jun 17 22:42:04 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Forbid use of some letters
 */

var forbiddenCodes = [
    81 /* Q */,
    87 /* W */,
    88 /* X */,
];

Array.prototype.forEach.call(
    document.querySelectorAll(".censored"),
    function(node) {
        node.addEventListener("keydown", function(event) {
            if (forbiddenCodes.indexOf(event.keyCode) != -1) {
                event.preventDefault();
            }
        });
    });
