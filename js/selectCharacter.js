(function(){
    var session = new Session();
	characters = document.getElementsByClassName('character');
	for (var i = 0; i < characters.length; i++) {
		characters[i].addEventListener('click', function(){
			id = this.getAttribute('characterId');
			character = getPersonaje(id);
            session.addCharacter(character);
            console.log(session.getCharacter());
            window.location="game.php"
		});
	}

	function getPersonaje(id){
		switch (id) {
			case 1:
				return new Character(id);
			case 2:
				return new Character(id);
			case 3:
				return new Character(id);
			case 4:
				return new Character(id);
			default:
				return new Character(id);
		}
	}
}())
