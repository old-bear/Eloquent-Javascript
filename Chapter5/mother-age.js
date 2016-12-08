/**
 * Date: Tue Jun 14 16:05:20 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Calculate the average age of the mother when child is born
 */

var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function average(arr) {
    return arr.reduce(function(sum, cur) {
        return sum + cur;
    }) / arr.length;
}

var ages = ancestry.filter(function(person) {
    return byName[person.mother] != null;
}).map(function(person) {
    return person.born - byName[person.mother].born;
});

console.log('The average age of a mother when her child is born is: '
            + average(ages));
