/**
 * Date: Tue Jun 14 16:05:20 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Calculate the average age of people group by century
 */

var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function groupBy(arr, groupFunc) {
    var groups = {};
    arr.forEach(function(elem) {
        var groupName = groupFunc(elem);
        if (groupName in groups) {
            groups[groupName].push(elem);
        } else {
            groups[groupName] = [elem];
        }
    });
    return groups;
}

function average(arr) {
    return arr.reduce(function(sum, cur) {
        return sum + cur;
    }) / arr.length;
}

var byCentury = groupBy(ancestry, function(person) {
    return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
    var ages = byCentury[century].map(function(person) {
        return person.died - person.born;
    });
    console.log('The average age of people in ' + century
                + 'th century is ' + average(ages));
}               
