/**
 * Date: Sat Jun 18 10:40:44 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Generate tabs
 */

var tabs = [];
var curPos = 0;
var curButton = null;

function asTabs(node) {
    var first = node.firstChild;
    Array.prototype.forEach.call(node.querySelectorAll(
        '[data-tabname]'), function(child, pos) {
            var button = document.createElement('button');
            button.textContent = child.getAttribute('data-tabname');
            button.setAttribute('type', 'button');
            button.addEventListener('click', function(event) {
				if (curPos != pos) {
					tabs[curPos].style.display = 'none';
					tabs[pos].style.display = 'block';
					curPos = pos;
					
					curButton.style.backgroundColor = "lightskyblue"
					button.style.backgroundColor = "deepskyblue";
					curButton = button;
				}
            });
			if (curButton == null) {
				curButton = button;
			}
            child.style.display = 'none';
            node.insertBefore(button, first);
            tabs.push(child);
        });

    tabs[curPos].style.display = 'block';
	curButton.style.backgroundColor = "deepskyblue";
}

asTabs(document.querySelector('#tabview'));
