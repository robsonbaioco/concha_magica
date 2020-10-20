function playAudio(path) {
	var audio = new Audio(window.location.href.split('#')[0] + path);
	audio.play();
}