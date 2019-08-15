

var dick = ['Чёрный',
    'Азиатский',
    'Европейский',
    'Мексиканский',
    'Классический',
    "взрывнаяАрабика",
    'Маленький',
    "Нанохуй"];
var rand = Math.floor(Math.random() * dick.length);


var getDick = document.querySelectorAll('.getDick');
getDick['.getDick'].onclick = function () {
    alert('Ваш хуй - ' + dick[rand]);
}

alert('Ваш хуй - ' + dick[rand]);