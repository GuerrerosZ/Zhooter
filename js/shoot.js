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

    right(){
        alert("derecha");
    }

    up(){
        alert("arriba");
    }

    down(){
        alert("abajo");
    }

    left(){
        alert("izquierda");
    }
}

class BurstShoot extends Shoot{
    constructor(){
        super();
    }

    right(){
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

    up(){
        var x = character.getX();
        var y = character.getY();

        var escenario = document.getElementById('escenario');
        var bullet = document.createElement('div');
        bullet.setAttribute('class', 'lineal');
        bullet.style.width = '1px';
        bullet.style.height = y + 'px';
        escenario.appendChild(bullet);
        bullet.style.left = x + 'px';
        bullet.style.top = 0;
        setTimeout(function(){
            escenario.removeChild(bullet)
        },100);
    }

    down(){
        var x = character.getX();
        var y = character.getY();

        var escenario = document.getElementById('escenario');
        var bullet = document.createElement('div');
        bullet.setAttribute('class', 'lineal');
        bullet.style.width = '1px';
        bullet.style.height = (escenario.getBoundingClientRect().height - y) + 'px';
        escenario.appendChild(bullet);
        bullet.style.left = x + 'px';
        bullet.style.top = y + 'px';
        setTimeout(function(){
            escenario.removeChild(bullet)
        },100);
    }

    left(){
        var x = character.getX();
        var y = character.getY();

        var escenario = document.getElementById('escenario');
        var bullet = document.createElement('div');
        bullet.setAttribute('class', 'lineal');
        bullet.style.width = x + 'px';
        bullet.style.height = '1px';
        escenario.appendChild(bullet);
        bullet.style.left = 0;
        bullet.style.top = y + 'px';
        setTimeout(function(){
            escenario.removeChild(bullet)
        },100);
    }

    // createHorizontalBullet(width,height,xi,xf){

    // }
}

class PelletShoot extends Shoot{
    constructor(){
        super();
    }
    
    right(){
        alert("derecha");
    }

    up(){
        alert("arriba");
    }

    down(){
        alert("abajo");
    }

    left(){
        alert("izquierda");
    }
}
