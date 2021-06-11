(function(){
	session = new Session();
	character = session.getCharacter();
	var enemys = [];
	for (var i = 0; i < 5; i++) {
		var enemy = new Enemy(1);
		character.subscribe(enemy);
		enemys.push(enemy);
	}

	setInterval(runEnemy,500);

	function runEnemy(){
		for (var i = 0; i < enemys.length; i++) {
			enemys[i].run();
		}
	}

	
}());
