class Enemy {
    constructor(id) {
        var data = this.selectenemy(id);
        this.id = id;
        this.name = data.name;
        this.healt = data.healt;
        this.vel = data.vel;
        this.danio = data.danio;
        this.attackRange = data.attackRange;
        this.attackCad = data.attackCad;

        this.xPos; //random
        this.yPos; //random

        this.xCharacter = 0;
        this.yCharacter = 0;

        this.movDelay = 100; //Milisegundos

        this.xDir = false;
        this.yDir = false;
        this.lastMov = false;

        alert(`se creo un enemigo ${data.name}`);
    }

    getId() {
        return this.id;
    }

    selectenemy(id) {
        var idenemys = {
            "1": zombie,
            "2": esquelo,
        };

        return idenemys[id];
    }

    notify(model) {
        xCharacter = model.xPos;
        yCharacter = model.yPos;
    }

    run() {
        if (Math.SQRT2(Math.pow(xPos - xCharacter) + Math.pow(base, exponente)(yPos - yCharacter)) > attackRange) {
            if (xCharacter > xPos) {
                xPos += vel;
            } else if (xCharacter < xPos) {
                xPos -= vel;
            }
        } else {
            atacar();
            sleep(this.attackCad);
        }
        sleep(movDelay);
        if (Math.SQRT2(Math.pow(xPos - xCharacter) + Math.pow(base, exponente)(yPos - yCharacter)) > attackRange) {
            if (yCharacter > yPos) {
                yPos += vel;
            } else if (yCharacter < yPos) {
                yPos -= vel;
            }
        } else {
            atacar();
            sleep(this.attackCad);
        }
        sleep(movDelay);
    }
}

// Valores de cada Enemigo
var zombie = {
    "name": "Zombie",
    "healt": 10,
    "vel": 25,
    "danio": 4,
    "attackRange": 5,
    "attackCad": 1,
};

var esquelo = {
    "name": "Esqueleto",
    "healt": 7,
    "vel": 50,
    "danio": 2,
    "attackRange": 5,
    "attackCad": 0.5,
};