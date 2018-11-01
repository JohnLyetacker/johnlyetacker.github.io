"use strict";
var login, password;

login=prompt('Введите логин', ' ');

if (login==null) {
	alert('Вход отменён');
} else if (login=='Админ') {
	password=prompt('Введите пароль');
	if (password=='123'){
		alert('Добро пожаловать!');
	} else if (password==null) {
		alert('Вход отменён');
	} else {
		alert('Пароль неверен');
	}
} else {
	alert('Я вас не знаю');
}