(function(){
	var music = new Audio('sound/music.mp3');
	music.volume = 0.5;
	setInterval(function(){
		if (music.paused) {
			music.play();
		}
	},1);	
}());