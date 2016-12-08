/**
 * Date: Fri Jun 17 22:16:38 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview A flying cat with his hat
 */

var cat = document.querySelector('#cat');
var hat = document.querySelector('#hat');
var angle = 0;
var lastTime = null;
var centerX = 300;
var centerY = 200;
var radiusX = 200;
var radiusY = 50;

function animate(time) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.002;
    }
    lastTime = time;
    cat.style.top = (Math.sin(-angle) * radiusY + centerY) + "px";
    cat.style.left = (Math.cos(-angle) * radiusX + centerX) + "px";
    hat.style.top = (Math.sin(-angle + Math.PI) * radiusY + centerY) + "px";
    hat.style.left = (Math.cos(-angle + Math.PI) * radiusX + centerX) + "px";

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
