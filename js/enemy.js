class Enemy {
    constructor(id) {
        var data = this.selectEnemy(id);
        this.id = id;
        this.name = data.name;
        this.healt = data.healt + parseInt(level);
        this.vel = data.vel + parseInt(level);
        this.danio = data.danio + parseInt(level);
        this.attackRange = data.attackRange + parseInt(level);
        this.attackCad = data.attackCad;
        this.control = new EnemyControl(this);
        this.control.createEnemy()
        this.xPos = this.control.getPosX(); //random
        this.yPos = this.control.getPosY(); //random

        this.xCharacter = character.getX();
        this.yCharacter = character.getY();

        this.movDelay = 100; //Milisegundos
    }

    setHealt(healt){
        this.healt = healt;
        if (this.healt <= 0) {
           this.control.kill();
           var aux = [];
           for (var i = 0; i < enemys.length; i++) {
               if (enemys[i] !== this) {
                    aux.push(enemys[i]);
               }
           }
            enemys = aux;
        }
    }

    toDamage(damage){
        this.setHealt(this.getHealt()-damage);
        this.control.scream();
    }

    getHealt(){
        return this.healt;
    }

    getId() {
        return this.id;
    }

    selectEnemy(id) {
        var idenemys = {
            "1": zombie,
            "2": esquelo,
        };

        return idenemys[id];
    }

    update(model) {
        this.xCharacter = model.x;
        this.yCharacter = model.y;
    }

    run() {
    	var distancia = Math.sqrt(Math.pow(this.xPos - this.xCharacter,2) + Math.pow(this.yPos - this.yCharacter,2));
        if (distancia > this.attackRange) {
        	if (this.xCharacter > this.xPos) {
            	if (this.yCharacter > this.yPos) {
            		this.control.addPos(this.vel,this.vel);
            	}else{
            		this.control.addPos(this.vel,-this.vel);
            	}
            }else{
            	if (this.yCharacter > this.yPos) {
            		this.control.addPos(-this.vel,this.vel);
            	}else{
            		this.control.addPos(-this.vel,-this.vel);
            	}
            }
        } else {
            this.atacar();
        }
    }

    atacar(){
    	character.toDamage(this.danio);
    }

    setPos(x,y){
		this.xPos = x;
		this.yPos = y;
	}

    getControl(){
        return this.control;
    }
}

// Valores de cada Enemigo
var zombie = {
    "name": "Zombie",
    "healt": 10,
    "vel": 25,
    "danio": 4,
    "attackRange": 100,
    "attackCad": 1,
};

var esquelo = {
    "name": "Esqueleto",
    "healt": 7,
    "vel": 50,
    "danio": 2,
    "attackRange": 100,
    "attackCad": 0.5,
};
