/**
 * Date: Tue Jun 14 21:59:19 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Implementation of iteration
 */

// An iterable prototype should implement the following methods:
// begin: Start the iteration
// next: Return the current element and then advance one element forward
// end: Return true iff the iteration ends

function ArraySeq(arr) {
    this.arr = arr;
}
ArraySeq.prototype.begin = function() {
    this.pos = 0;
}
ArraySeq.prototype.next = function() {
    return this.arr[this.pos++];
}
ArraySeq.prototype.end = function() {
    return this.pos >= this.arr.length;
}

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
}
RangeSeq.prototype.begin = function() {
    this.cur = this.from;
}
RangeSeq.prototype.next = function() {
    return this.cur++;
}
RangeSeq.prototype.end = function() {
    return this.cur > this.to;
}

function logFive(seq) {
    seq.begin();
    for (var i = 0; i < 5 && !seq.end(); ++i) {
        console.log(seq.next());        
    }
}

var arr = new ArraySeq([3, -1, 88]);
console.log('logFive(', arr, '):');
logFive(arr);
var range = new RangeSeq(1, 10);
console.log('logFive(', range, '):');
logFive(range);
