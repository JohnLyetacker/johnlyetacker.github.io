"use strict";
var login, password;

login=prompt('Введите логин', '');

switch (login) {
	case null :
		alert('Вход отменён');
		break;
	case 'Админ' :
		password=prompt('Введите пароль', '');
		switch (password) {
			case null :
  				alert('Вход отменён');
  				break;
  			case '123' :
  				alert('Добро пожаловать!');
  				break;
			default :
				alert('Пароль неверен');
		}
		break;
	default :
		alert('Я вас не знаю');
}