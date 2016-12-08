/**
 * Date: Tue Jun 14 20:03:22 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Vectors representing coordinates 
 */

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(rhs) {
    return new Vector(this.x + rhs.x, this.y + rhs.y);
}

Vector.prototype.minus = function(rhs) {
    return new Vector(this.x - rhs.x, this.y - rhs.y);
}

Vector.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
}

Object.defineProperty(Vector.prototype, 'length', {
    get: function() { return Math.sqrt(this.x*this.x + this.y*this.y); }
});

var v1 = new Vector(3, 4);
var v2 = new Vector(2, 3);
console.log(v1.toString() + ' + ' + v2 + ' = ' + v1.plus(v2).toString());
console.log(v1.toString() + ' - ' + v2 + ' = ' + v1.minus(v2).toString());
console.log('|' + v1.toString() + '| = ' + v1.length);
