class Shoot{
    constructor(){}

    run(){
        alert("disparo");
    }

    getX(){
    	return character.getX();
    }

    getY(){
    	return character.getY();
    }

    spawn(){
        alert(enemys);
    	var x = this.getX();
    	var y = this.getY();
    	var bullet = document.createElement('img');
    	bullet.src = 'img/bullets/bullet.png';
    	bullet.style.top = y + 'px';
    	bullet.style.left = x + 'px';
    	document.getElementById('escenario').appendChild(bullet);
    	return bullet;
    }
}

class LinealShoot extends Shoot{
    constructor(){
        super();
    }

    right(){
    	var bullet = super.spawn();
    	bullet.setAttribute('class','rightBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.x + 10;
    		bullet.style.left = desplazamiento + 'px';
    		if (window.innerWidth < bullet.x) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);
    }

    up(){
        var bullet = super.spawn();
    	bullet.setAttribute('class','upBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.y - 10;
    		bullet.style.top = desplazamiento + 'px';
    		if (0 > bullet.y) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);	
    }

    down(){
        var bullet = super.spawn();
    	bullet.setAttribute('class','downBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.y + 10;
    		bullet.style.top = desplazamiento + 'px';
    		if (window.innerHeight < bullet.y) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);	
    }

    left(){
        var bullet = super.spawn();
    	bullet.setAttribute('class','leftBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.x - 10;
    		bullet.style.left = desplazamiento + 'px';
    		if (0 > bullet.x) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);
    }
}

class BurstShoot extends Shoot{
    constructor(){
        super();
        this.linealShoot = new LinealShoot();
    }

    right(i = 0){
    	var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.right();
    		i += 1;
    	},100);
    }

    up(i = 0){
       var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.up();
    		i += 1;
    	},100);
    }

    down(i = 0){
        var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.down();
    		i += 1;
    	},100);
    }

    left(i = 0){
        var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.left();
    		i += 1;
    	},100);
    }
}

class PelletShoot extends Shoot{
    constructor(){
        super();
        this.linealShoot = new LinealShoot();
        this.burstShoot = new BurstShoot();
    }
    
    right(){
        this.burstShoot.right();
        this.linealShoot.up();
        this.linealShoot.down();
    }

    up(){
        this.linealShoot.right();
        this.burstShoot.up();
        this.linealShoot.left();
    }

    down(){
        this.linealShoot.right();
        this.burstShoot.down();
        this.linealShoot.left();
    }

    left(){
        this.linealShoot.up();
        this.burstShoot.left();
        this.linealShoot.down();
    }
}
