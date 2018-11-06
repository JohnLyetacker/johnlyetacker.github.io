"use strict";
function min(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}
var x = prompt('x','x');
var y = prompt('y','y');
var z = min(x,y);
alert(z);