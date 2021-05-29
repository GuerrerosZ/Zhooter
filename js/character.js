class Character extends Observable {
    constructor(id) {
        var data = this.selectcharacter(id);
        this.id = id;
        this.name = data.name;
        this.healt = data.healt;
        this.vel = data.vel;
        this.armor = data.armor;
        this.primaryWeapon = data.primaryWeapon;
        this.defaultWeapon = data.defaultWeapon;
        this.controls = new Control();
        this.personaje = document.getElementById('character');
        this.xPos;
        this.yPos;
    }

    //En el metodo de movimiento hay que agregar this.notify(this);

    disparar() {
        this.primaryWeapon.disparar();
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