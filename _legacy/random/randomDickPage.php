<!DOCTYPE html>
<html>

<head>
	<title>Рандомизатор хуёв.</title>
	<meta charset="utf-8">
	<link type="text/css" rel="stylesheet" href="../css/style.css">
	<link rel="icon" href="../favicon.ico">
</head>

<body>
	<div class="wrapper">
		<!-- <script async src="randomdick.js"></script> -->
		<header>Тестовый сайт-свалка.</header>
		<nav>
			<ul>
				<li><a href="../index.html">Главная страница</a></li>
				<li><strong>Рандомизатор хуёв</strong></li>
				<li><a href="../problems.html">Решить текущую задачу</a></li>
			</ul>
		</nav>
		<!-- <div class="getDick">Узнать какой у Вас хуй.</div> -->
		<p>Ваш хуй - 
			<?php
				$dick = ['Чёрный',
                'Азиатский',
                'Европейский',
                'Мексиканский',
                'Классический',
                "взрывнаяАрабика",
                'Маленький',
                "Нанохуй"];
                echo ($dick[rand(0, count($dick)-1)]);
			?>
		</p>
		<!-- <img src="schlong.svg" width="100" class="image"> -->
	</div>
	<div class="footer-wrapper">
		<footer>Copyright: <a href="mailto:crosssince2007@yandex.ru">John Lyetacker</a></footer>
	</div>
</body>

</html>