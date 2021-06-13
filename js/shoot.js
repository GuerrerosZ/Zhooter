class Shoot{
    constructor(){}

    spawn(){
    	return this.bulletControl = new BulletControl();
    }

    doDamage(bullet,interval,damage){
        for (var i = 0; i < enemys.length; i++) {
            var enemy = enemys[i].getControl();
            var xEnemy = enemy.getPosX();
            var yEnemy = enemy.getPosY();
            if (bullet.x - xEnemy < 80 && bullet.y - yEnemy < 80 && bullet.y > yEnemy && bullet.x > xEnemy) {
                enemys[i].toDamage(damage);
                clearInterval(interval);
                return true;
            }  
        }
        return false;
    }
}

class LinealShoot extends Shoot{
    constructor(){
        super();
    }

    right(damage){
        var padre = this;
    	var bullet = super.spawn();
    	bullet.setAttribute('class','rightBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.x + 10;
    		bullet.style.left = desplazamiento + 'px';
            var colision = padre.doDamage(bullet,interval,damage);
    		if (window.innerWidth < bullet.x || colision) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);
    }

    up(damage){
        var padre = this;
        var bullet = super.spawn();
    	bullet.setAttribute('class','upBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.y - 10;
    		bullet.style.top = desplazamiento + 'px';
            var colision = padre.doDamage(bullet,interval,damage);
    		if (0 > bullet.y || colision) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);	
    }

    down(damage){
        var padre = this;
        var bullet = super.spawn();
    	bullet.setAttribute('class','downBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.y + 10;
    		bullet.style.top = desplazamiento + 'px';
            var colision = padre.doDamage(bullet,interval,damage);
    		if (window.innerHeight < bullet.y || colision) {
		    	clearInterval(interval);
		    	document.getElementById('escenario').removeChild(bullet);
		  	}
    	},10);	
    }

    left(damage){
        var padre = this;
        var bullet = super.spawn();
    	bullet.setAttribute('class','leftBullet');
    	var interval = setInterval(function(){
    		var desplazamiento = bullet.x - 10;
    		bullet.style.left = desplazamiento + 'px';
            var colision = padre.doDamage(bullet,interval,damage);
    		if (0 > bullet.x || colision) {
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

    right(damage,i = 0){
    	var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.right(damage);
    		i += 1;
    	},100);
    }

    up(damage,i = 0){
       var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.up(damage);
    		i += 1;
    	},100);
    }

    down(damage,i = 0){
        var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.down(damage);
    		i += 1;
    	},100);
    }

    left(damage,i = 0){
        var self = this;
		var interval = setInterval(function(){
    		if (i == 4) {
    			clearInterval(interval);
    		}
    		self.linealShoot.left(damage);
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
    
    right(damage){
        this.burstShoot.right(damage);
        this.linealShoot.up(damage);
        this.linealShoot.down(damage);
    }

    up(damage){
        this.linealShoot.right(damage);
        this.burstShoot.up(damage);
        this.linealShoot.left(damage);
    }

    down(damage){
        this.linealShoot.right(damage);
        this.burstShoot.down(damage);
        this.linealShoot.left(damage);
    }

    left(damage){
        this.linealShoot.up(damage);
        this.burstShoot.left(damage);
        this.linealShoot.down(damage);
    }
}
