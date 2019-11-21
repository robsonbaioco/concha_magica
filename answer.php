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
	
	$answer = $answers[array_rand($answers)];
		
    return json_encode($answer);
