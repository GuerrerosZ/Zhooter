class Observable {
    constructor() {
        this.observers = [];
    }

    // Suscribe una clase notificadora
    subscribe(c) {
        this.observers.push(c);
    }

    // Desuscribe la clase notificadora
    unsubscribe(c) {
        this.observers = this.observers.filter(observer => observer instanceof c !== true);
    }

    // Llama a todos nuestros suscriptores
    notify(model) {
        this.observers.forEach(observer => {
            observer.update(model);
        });
    }
}

class Character extends Observable {
    constructor(id) {
        super();
        var data = this.selectCharacter(id);
        this.id = id;
        this.name = data.name;
        this.health = data.health;
        this.vel = data.vel;
        this.armor = data.armor;
        this.primaryWeapon = data.primaryWeapon;
        this.defaultWeapon = data.defaultWeapon;
        this.weaponActual = this.primaryWeapon;
        this.controls = new Control();
        this.personaje = document.getElementById('character');
        this.xPos;
        this.yPos;
        this.statsControl = new StatsControl();
        this.statsControl.updateAmmo(this.weaponActual.getAmmo());
    }

    setHealt(healt) {
        this.healt = healt;
        this.updateStats();
        if (this.healt <= 0) {
            window.location.replace("gameOver.php");
        }
    }

    toDamage(damage) {
        this.setHealt(this.getHealt() - damage);
        this.statsControl.dropBlood();
    }

    getHealt() {
        return this.healt;
    }

    shootRight() {
        this.primaryWeapon.shootRight();
        this.updateStats();
    }

    shootLeft() {
        this.primaryWeapon.shootLeft();
        this.updateStats();
    }

    shootUp() {
        this.primaryWeapon.shootUp();
        this.updateStats();
    }

    shootDown() {
        this.primaryWeapon.shootDown();
        this.updateStats();
    }

    getControls() {
        return this.controls;
    }
    getId() {
        return this.id;
    }

    getX() {
        return this.personaje.getBoundingClientRect().left;
    }

    getY() {
        return this.personaje.getBoundingClientRect().top;
    }

    selectCharacter(id) {
        var idCharacters = {
            "1": mSantos,
            "2": eRavenna,
            "3": pLampone,
            "4": gMedina,
        };

        return idCharacters[id];
    }

    notify() {
        var model = {
            "x": this.getX(),
            "y": this.getY()
        }
        super.notify(model);
    }

    updateStats(){
        this.statsControl.updateHealt(this.getHealt());
        this.statsControl.updateAmmo(this.weaponActual.getAmmo());
    }
}

//Creacion de Armas
var ak = new Ak(),
    shotgun = new Shotgun()
    rifle = new Rifle(),
    revolver = new Revolver(),
    secondary = new Default();

// Valores de cada Personaje
var mSantos = {
    "name": "Mario Santos",
    "healt": 100,
    "vel": 100,
    "armor": 100,
    "primaryWeapon": ak,
    "defaultWeapon": secondary,
};

var eRavenna = {
    "name": "Emilio Ravenna",
    "healt": 100,
    "vel": 100,
    "armor": 100,
    "primaryWeapon": shotgun,
    "defaultWeapon": secondary,
};

var pLampone = {
    "name": "Pablo Lampone",
    "healt": 100,
    "vel": 100,
    "armor": 100,
    "primaryWeapon": rifle,
    "defaultWeapon": secondary,
};

var gMedina = {
    "name": "Gabriel Medina",
    "healt": 100,
    "vel": 100,
    "armor": 100,
    "primaryWeapon": revolver,
    "defaultWeapon": secondary,
};