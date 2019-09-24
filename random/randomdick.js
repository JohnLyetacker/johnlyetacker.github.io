// "use straight";
let dick = ['чёрный',
    'азиатский',
    'европейский',
    'мексиканский',
    'классический',
    'взрывнаяАрабика',
    'маленький',
    'нанохуй',
    'покрашенный в грим клоунский',
    'пиратский протез',
    'залупа откушена собакой',
];
let rand = Math.floor(Math.random() * dick.length);
let dickLength = Math.floor(Math.random() * 5) + 1;
let cm = " ";
switch (dickLength) {
    case 1: cm = " сантиметр";
        break;
    case 2: cm = " сантиметра";
        break;
    case 3: cm = " сантиметра";
        break;
    case 4: cm = " сантиметра";
        break;
    case 5: cm = " сантиметров";
        break;
    default: cm = " error";
        break;
}
document.getElementById("getDick").childNodes[0].nodeValue = dick[rand] + ", длина - " + dickLength + cm;