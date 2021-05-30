class Gun {
    constructor(range, cadency, damage, id, name, maxAmmo, bulletVel,shoot){
        this.id = id;
        this.name = name;
        this.ammo = maxAmmo;
        this.maxAmmo = maxAmmo;
        this.range = range;
        this.cadency = cadency;
        this.damage = damage;
        this.bulletVel = bulletVel;
        this.disparo = shoot;
    }

    shootRight(){
        this.disparo.right();
    }

    shootLeft(){
        this.disparo.left();
    }

    shootUp(){
        this.disparo.up();
    }

    shootDown(){
        this.disparo.down();
    }

    resetAmmo(){
        this.ammo = maxAmmo;
    }

    moreAmmo(newMaxAmmo){
        this.maxAmmo = newMaxAmmo;
    }

    shot(){
        this.ammo = ammo - 1;
    }
}
//constructor(range, cadency, damage, id, name, maxAmmo, bulletVel)
//cadency: tiempo entre disparos

class Default extends Gun {
    constructor(){
        super(60, 0.5, 1, 1, "Pistol", Number.POSITIVE_INFINITY, 1,new LinealShoot());
    }
}

class Ak extends Gun {
    constructor(){
        super(100, 0.2, 3, 2, "ak-47", 78, 1.2,new BurstShoot());
    }
}

class Shotgun extends Gun {
    constructor(){
        super(30, 0.8, 5, 3, "Escopeta", 28, 1.2,new PelletShoot());
    }
}

class Rifle extends Gun {
    constructor(){
        super(120, 1.2, 15, 4, "Rifle", 18, 1.2,new LinealShoot());
    }
}

class Revolver extends Gun {
    constructor(){
        super(40, 1.5, 10, 5, "Revolver", 12, 1.2,new LinealShoot());
    }
}

