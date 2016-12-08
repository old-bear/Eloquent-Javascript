/**
 * Date: Fri Jun 17 23:50:11 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Add mouse trail effect
 */

var trails = [];
var curPos = 0;
var maxTrail = 10;

for (var i = 0; i < maxTrail; ++i) {
    var trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.display = 'none';
    document.body.appendChild(trail);
    trails.push({node: trail, timer: null});
}

addEventListener("mousemove", function(event) {
    var trailObj = trails[curPos];
    if (trailObj.timer) {
        clearTimeout(trailObj.timer);
    }
    trailObj.node.style.display = 'block';
    trailObj.node.style.left = event.pageX + "px";
    trailObj.node.style.top = event.pageY + "px";
    trailObj.timer = setTimeout(function() {
        trailObj.node.style.display = 'none';
    }, 100);
    curPos = (curPos + 1) % maxTrail;
});
