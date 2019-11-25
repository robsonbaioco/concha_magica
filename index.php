<?php
	$answers = array(
		'sim',
		'não',
		'tente novamente mais tarde',
		'nada',
		'vá em frente',
		'nunca',
		'jamais',
		'com certeza',
		'talvez',
		'não quero',
		
	);
	if ($_POST) {
		$answer = $answers[array_rand($answers)];
		$question = $_POST['question'];
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Concha Mágica</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="css/libs/monalisa.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body style="background-image: url(images/bg.png)">

	<div class="container">

		<div class="content">		
			<img class="concha" src="images/concha.png">

			<form action="#" class="Form" method="POST">
				<div class="form-item">
					<div class="_append">
						<input type="" name="question" value="<?= isset($question) ? $question : '' ?>" placeholder="Make a question to the Magic Shell">
						<button class="Button">Ask</button>
					</div>
					<p class="answer wow fadeIn"><?= isset($answer) ? $answer : '' ?></p>
				</div>
			</form>
		</div>
	</div>

	<script src="js/libs/jquery.min.js"></script>
	<script src="js/libs/wow.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>