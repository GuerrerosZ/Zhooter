class Shoot{
    constructor(){}

    run(){
        alert("disparo");
    }
}

class LinealShoot extends Shoot{
    constructor(){
        super();
    }

    run(){
        alert("Lineal")
    }
}

class BurstShoot extends Shoot{
    constructor(){
        super();
    }

    run(){
        this.rigth();
    }

    rigth(){
        var x = character.getX();
        var y = character.getY();

        var escenario = document.getElementById('escenario');
        var bullet = document.createElement('div');
        bullet.setAttribute('class', 'lineal');
        bullet.style.width = (escenario.getBoundingClientRect().width - x) + 'px';
        bullet.style.height = '1px';
        escenario.appendChild(bullet);
        bullet.style.left = x + 'px';
        bullet.style.top = y + 'px';
        setTimeout(function(){
            escenario.removeChild(bullet)
        },100);
    }

    createHorizontalBullet(width,height,xi,xf){


    }
}

class PelletShoot extends Shoot{
    constructor(){
        super();
    }

    run(){
        alert("Perdigones")
    }
}