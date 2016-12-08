/**
 * Date: Wed Jun 15 16:17:43 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Convertion between month name and index
 */

var month = function() {
    var monthNames = ['January', 'February', 'March', 'April', 'May',
                      'June', 'July', 'August', 'September', 'October',
                      'November', 'December'];

    return {
        name: function(index) { return monthNames[index]; },
        index: function(month) { return monthNames.indexOf(month); }
    };
}();

console.log('The 5th month is ' + month.name(5-1));
console.log('August is the ' + (month.index('August')+1) + 'th month');
