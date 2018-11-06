"use strict";
function min(x, y) {
	return x < y ? x : y;
}
var x = prompt('x','x');
var y = prompt('y','y');
var z = min(x,y);
alert(z);