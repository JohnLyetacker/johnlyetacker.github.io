"use strict";
// "use straight";
function randomLength(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lengthNaming(dickLength) {
    let cm;
    if (dickLength < 5) {
        switch (dickLength) {
            case 1: cm = " сантиметр";
                break;
            case 2: cm = " сантиметра";
                break;
            case 3: cm = " сантиметра";
                break;
            case 4: cm = " сантиметра";
                break;
            default: cm = " (unexpected value, breaking)";
                break;
        }
    } else {
        cm = " сантиметров";
    }
    return cm;
}
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
let dickLength = randomLength(1, 10);
let cm = lengthNaming(dickLength);
document.getElementById("getDick").childNodes[0].nodeValue = dick[rand] + ", длина - " + dickLength + cm;