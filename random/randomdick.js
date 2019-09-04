// "use straight";
var dick = ['чёрный',
    'азиатский',
    'европейский',
    'мексиканский',
    'классический',
    "взрывнаяАрабика",
    'маленький',
    "нанохуй"];
var rand = Math.floor(Math.random() * dick.length);
document.getElementById("getDick").childNodes[0].nodeValue = dick[rand];