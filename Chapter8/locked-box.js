/**
 * Date: Wed Jun 15 10:42:10 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Operating a locked box
 */

var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(box, func) {
    if (!box.locked) {
        func(box.content);
        return;
    }

    box.unlock();
    try {
        func(box.content);
    } finally {
        box.lock();
    }
}

withBoxUnlocked(box, function(content) {
    console.log('Putting my precious into the box');
    content.push('My precious');
});

try {
    withBoxUnlocked(box, function(content) {
        throw new Error('Checking my precious... Fuck, pirate is comming!');
    });
} catch (e) {
    console.log(e.message);
}

withBoxUnlocked(box, function(content) {
    console.log('Thank God! ' + content[0] + ' is still in the box');
});
console.log('And the box is ' + (box.locked ? 'still locked' : ' unlocked!'));
