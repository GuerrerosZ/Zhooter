class Control{
	constructor(){
		this.character = document.getElementById("character");
		document.addEventListener('keydown', this.move);	
		document.addEventListener('keydown', this.shoot);	
	}

	move(){
		var tecla = event.keyCode;
		var character = document.getElementById("character");
		var cords = character.getBoundingClientRect();
		switch (tecla) {
            case 83: //abajo
                down();
                break;
            case 65: //izquierda
               	left();
                break;
            case 87: //arriba
                up();
                break;
            case 68: //derecha
                right();
                break;
            case 80: //pausa
            	pause();
            	break;
        }

       	function up(){
			var newCords = cords.top - 20;
	        if (newCords > -30){
	            character.style.top = newCords + "px";
	        }else{
	            character.style.top = window.innerHeight + "px";
	        }
		}

		function down(){
			var newCords = cords.top + 20;
	        if(newCords < window.innerHeight){
	            character.style.top = newCords + "px";
	        }else{
	            character.style.top = "-30px";
	        }
		}

		function left(){
	 		var newCords = cords.left - 20;
	        if (newCords > -30){
	            character.style.left = newCords + "px";
	        }else{
	            character.style.left = window.innerWidth + "px";
	        }
		}

		function right(){
			var newCords = cords.left + 20;
	        if (newCords < window.innerWidth){
	            character.style.left = newCords + "px";
	        }else{
	            character.style.left = "-30px";
	        }
		}
		function pause(){
			window.location.replace("../pause.php" , "PAUSA" , "width=220,height=140,top=300,left=700,scrollbars=NO,titlebar=YES");
			//pausar juego, hasta que se cierre la ventana emergente
		}
	}

	shoot(){
		var tecla = event.keyCode;
		switch (tecla) {
            case 40: //abajo
                character.shootDown();
                break;
            case 37: //izquierda
               	character.shootLeft();
                break;
            case 38: //arriba
                character.shootUp();
                break;
            case 39: //derecha
                character.shootRight();
                break;
        }
	}

	
}