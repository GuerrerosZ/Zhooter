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
        if(this.ammo > 0){
            this.shoot();
            this.disparo.right();
        }
    }

    shootLeft(){
        if(this.ammo > 0){
            this.shoot();
            this.disparo.left();
        }
    }

    shootUp(){
        if(this.ammo > 0){
            this.shoot();
            this.disparo.up();
        }
    }

    shootDown(){
        if(this.ammo > 0){
            this.shoot();
            this.disparo.down();
        }
    }

    resetAmmo(){
        this.ammo = maxAmmo;
    }

    moreAmmo(newMaxAmmo){
        this.maxAmmo = newMaxAmmo;
    }

    shoot(){
        this.ammo = this.ammo - 1;      
    }

    getAmmo(){
        return this.ammo;
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
        super(100, 0.2, 3, 2, "ak-47", 20, 1.2,new BurstShoot());
    }
}

class Shotgun extends Gun {
    constructor(){
        super(30, 0.8, 5, 3, "Escopeta", 15, 1.2,new PelletShoot());
    }
}

class Rifle extends Gun {
    constructor(){
        super(120, 1.2, 15, 4, "Rifle", 50, 1.2,new LinealShoot());
    }
}

class Revolver extends Gun {
    constructor(){
        super(40, 1.5, 10, 5, "Revolver", 100, 1.2,new LinealShoot());
    }
}

