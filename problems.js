"use strict";
//document.getElementById("currentProblem").childNodes[0].nodeValue = "date";
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
let json = JSON.stringify(student);

let userInformation = "Задача решена! Ваш браузер: " + navigator.userAgent + "; Ваша платформа: " + navigator.platform + "\u{1F60D}.";

document.getElementById("currentProblem").childNodes[0].nodeValue = userInformation;
setTimeout(() => document.getElementById("currentProblem").childNodes[0].nodeValue = "МЫ ЗНАЕМ ЧТО ТЫ СДЕЛАЛ НЕ ПРИТВОРЯЙСЯ НЕВИННЫМ", 3000);
setTimeout(() => document.body.style.background = 'red', 3000);
setTimeout(() => document.getElementById("currentProblem").childNodes[0].nodeValue = userInformation, 5000);
setTimeout(() => document.body.style.background = '', 5000);