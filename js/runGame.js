(function(){
	session = new Session();
	character = session.getCharacter();
	addEventListener('click', function(){
		character.disparar();
	});
}());
