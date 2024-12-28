"use strict";
let login = prompt('Введите логин', '');

switch (login) {
	case null:
		alert('Вход отменён');
		break;
	case 'Админ':
		let password = prompt('Введите пароль', '');
		switch (password) {
			case null:
				alert('Вход отменён');
				break;
			case '123':
				alert('Добро пожаловать!');
				break;
			default:
				alert('Пароль неверен');
		}
		break;
	default:
		alert('Я вас не знаю');
}