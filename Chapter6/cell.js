/**
 * Date: Tue Jun 14 21:06:44 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Different types of table cell
 */

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlinedCell(inner) {
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};

function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
}
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
}
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}

var a = new TextCell('Hello\nWorld');
console.log('Draw', a, ':', a.draw(a.minWidth(), a.minHeight()));
var b = new StretchCell(a, 8, 4);
console.log('Draw', b, ':', b.draw(b.minWidth(), b.minHeight()));
var c = new StretchCell(new UnderlinedCell(a), 8, 2);
console.log('Draw', c, ':', c.draw(c.minWidth(), c.minHeight()));
var d = new StretchCell(new RTextCell('Hello\nWorld'), 8, 4);
console.log('Draw', d, ':', d.draw(d.minWidth(), d.minHeight()));
