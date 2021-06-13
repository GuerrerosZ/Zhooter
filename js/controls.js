class Control{
	constructor(){
		this.character = document.getElementById("character");
		document.addEventListener('keydown', this.move);	
		document.addEventListener('keyup', this.shoot);	
		
	}

	move(){
		var tecla = event.keyCode;
		var img = document.getElementById("character");
		var cords = img.getBoundingClientRect();
		switch (tecla) {
            case 83: //abajo
                down();
               	break
            case 65: //izquierda
               	left();
               	break
            case 87: //arriba
                up();
                break
            case 68: //derecha
                right();
                break
            case 80: //pausa
            	pause();
            	break
        }

        character.notify();

       	function up(){
			var newCords = cords.top - 20;
	        if (newCords > -30){
	            img.style.top = newCords + "px";
	        }else{
	            img.style.top = window.innerHeight + "px";
	        }
		}

		function down(){
			var newCords = cords.top + 20;
	        if(newCords < window.innerHeight){
	            img.style.top = newCords + "px";
	        }else{
	            img.style.top = "-30px";
	        }
		}

		function left(){
	 		var newCords = cords.left - 20;
	        if (newCords > -30){
	            img.style.left = newCords + "px";
	        }else{
	            img.style.left = window.innerWidth + "px";
	        }
		}

		function right(){
			var newCords = cords.left + 20;
	        if (newCords < window.innerWidth){
	            img.style.left = newCords + "px";
	        }else{
	            img.style.left = "-30px";
	        }
		}

		function pause(){
			window.location.replace("pause.php" , "PAUSA" , "width=220,height=140,top=300,left=700,scrollbars=NO,titlebar=YES");
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

class EnemyControl{
	constructor(objectEnemy){
		this.enemy = document.createElement('img');
		this.objectEnemy = objectEnemy;
	}

	createEnemy(){
		this.enemy.setAttribute('src','img/sprites/zombie.png');
		this.enemy.setAttribute('class','enemy');
		document.getElementById('escenario').appendChild(this.enemy);
		var x = window.innerWidth * Math.random();
		var y = window.innerHeight * Math.random();
		while(Math.abs(x-window.innerWidth/2) < 100){
			x = window.innerWidth * Math.random();
		}
		while(Math.abs(y-window.innerHeight/2) < 100){
			y = window.innerHeight * Math.random();
		}
		this.setPos(x,y);
	}

	setPos(x,y){
		this.posX = x;
		this.posY = y;
		this.enemy.style.left = x + 'px';
		this.enemy.style.top = y + 'px';
		this.objectEnemy.setPos(this.enemy.getBoundingClientRect().left,this.enemy.getBoundingClientRect().top);
	}

	getPosX(){
		return this.posX;
	}

	getPosY(){
		return this.posY;
	}

	addPos(x,y){
		this.setPos(this.getPosX() + x,this.getPosY() + y);
	}

	kill(){
		document.getElementById('escenario').removeChild(this.enemy);
		var scream = new Audio('sound/scream2.mp3');
		scream.play();
	}

	scream(){
		var scream = new Audio('sound/scream.mp3');
		scream.play();
	}
}

class StatsControl{
	constructor(){
		this.healt = document.createElement('div');
		this.healt.setAttribute('class','stat');
		this.healt.innerHTML = 100;	
		this.ammo = document.createElement('div');
		this.ammo.setAttribute('class','stat');
		this.stats = document.getElementById('stats')
	}

	updateHealt(healt){
		this.healt.innerHTML = "Vida: " + healt + " ♥";
		this.stats.appendChild(this.healt);
	}

	updateAmmo(ammo){
		try{
			this.ammo.innerHTML = "Balas: " + ammo + " ➼";
			this.stats.appendChild(this.ammo);
		}catch(error){}
	}

	dropBlood(){
		var blood = document.createElement('div');
		blood.setAttribute('class','blood');
		this.stats.appendChild(blood);
		setTimeout(cleanBlood,100);
		function cleanBlood(){
			this.stats.removeChild(blood);
		}
		var ouch = new Audio('sound/ouch.mp3');
		ouch.play();
	}
}