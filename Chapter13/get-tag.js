/**
 * Date: Fri Jun 17 19:35:05 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Implementation of getElementsByTagName
 */

function getElementsByTagName(node, name) {
    var tag = [];
    if (node.tagName == name.toUpperCase()) {
        tag.push(node);
    }

    Array.prototype.forEach.call(node.childNodes, function(child) {
        tag = tag.concat(getElementsByTagName(child, name));
    });
    return tag;
}

console.log("There are " + getElementsByTagName(document, 'p').length
            + ' <p> nodes inside document');
console.log("There are " + getElementsByTagName(document, 'div').length
            + ' <div> nodes inside document');
console.log("There are " + getElementsByTagName(
    document.querySelector('#table'), 'p').length + ' <p> nodes inside <table>');
console.log("There are " + getElementsByTagName(
    document.querySelectorAll('div')[1], 'li').length + ' <li> nodes inside 2nd <div>');
