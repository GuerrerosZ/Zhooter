*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${browser}  headlessfirefox
${pagina}  http://localhost/Zhooter

*** Test Cases ***
TR1.3
    Ejecutar juego
    Frenar zombis
    Disparar
    Cerrar navegador

TR1.5
    Ejecutar juego
    Frenar zombis
    Cambiar arma
    Cerrar navegador

TR1.6
    Ejecutar juego
    Pasar de nivel
    Usar tienda
    Cerrar navegador

TR2.1
    Ejecutar juego
    Recorrer vistas
    Cerrar navegador

TR2.5
    Ejecutar juego
    Pasar de nivel
    Comprar mejoras
    Cerrar navegador

TR2.7
    Ejecutar juego
    Estadisticas
    Cerrar navegador

TR2.8
    Ejecutar juego
    Game over
    Cerrar navegador

TR3.1
    Ejecutar juego
    Frenar zombis
    Numero de enemigos
    Cerrar navegador


*** Keywords ***
Ejecutar juego
    Open browser    ${pagina}   ${browser}    service_log_path=${{os.path.devnull}}
    Click Element   class:button
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('character')[0].click()
    Sleep   1s

Disparar
    ${ammo0}=  Execute JavaScript  return (character.weaponActual.getAmmo()-4);
    Press Keys    none    ARROW_UP
    Press Keys    none    ARROW_DOWN
    Press Keys    none    ARROW_LEFT
    Press Keys    none    ARROW_RIGHT
    ${ammo1}=  Execute JavaScript  return character.weaponActual.getAmmo();
    Should Be Equal  ${ammo1}  ${ammo0}

Cambiar arma
    ${ammo0}=  Execute JavaScript  return (character.weaponActual.getName());
    Press Keys    none    SPACE
    ${ammo1}=  Execute JavaScript  return (character.weaponActual.getName());
    Should Not Be Equal  ${ammo0}  ${ammo1}

Frenar zombis
    Execute JavaScript  clearInterval(interval_attack);

Pasar de nivel
    Execute JavaScript   for (var i = enemys.length - 1; i >= 0; i--) {enemys[i].setHealt(0);}

Usar tienda
    Sleep   1s
    Click Element   id:b3
    Title Should Be  Zhooter
    Pasar de nivel
    Sleep   1s
    Click Element   id:b2
    Title Should Be  Zhooter
    Pasar de nivel
    Sleep   1s
    Click Element   id:b1
    Title Should Be  Zhooter
    Pasar de nivel

Recorrer vistas
    Press Keys    none    P
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('button')[1].click()
    Sleep   1s
    Click Element   id:bVolver
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('button')[0].click()
    Sleep   1s
    Execute JavaScript   character.setHealt(0)
    Sleep   1s
    Click Element   id:reinicio
    Sleep   1s
    Title Should Be  Menu

Comprar mejoras
    Sleep   1s
    Click Element   id:b3
    Title Should Be  Zhooter
    ${weakness}=  Execute JavaScript  return (window.sessionStorage.getItem('Weakness'));
    Should Not Be Equal  ${weakness}  0
    Pasar de nivel
    Sleep   1s
    Click Element   id:b2
    Title Should Be  Zhooter
    ${premiumGun}=  Execute JavaScript  return (window.sessionStorage.getItem('premiumGun'));
    Should Not Be Equal  ${premiumGun}  0
    Pasar de nivel
    Sleep   1s
    Click Element   id:b1
    Title Should Be  Zhooter
    ${extraHealth}=  Execute JavaScript  return (window.sessionStorage.getItem('extraHealth'));
    Should Not Be Equal  ${extraHealth}  0
    Pasar de nivel

Estadisticas
    Press Keys    none    P
    Sleep   1s
    Execute JavaScript  window.sessionStorage.setItem("level", 5);
    Execute JavaScript  window.sessionStorage.setItem("health", 5);
    Execute JavaScript  window.sessionStorage.setItem("killedEnemies", 5);
    Execute JavaScript  window.sessionStorage.setItem("gun", 'ak');
    Execute JavaScript   document.getElementsByClassName('button')[1].click()
    Sleep   1s
    ${level}=  Execute JavaScript  return (window.sessionStorage.getItem('level'));
    ${health}=  Execute JavaScript  return (window.sessionStorage.getItem('health'));
    ${killedEnemies}=  Execute JavaScript  return (window.sessionStorage.getItem('killedEnemies'));
    ${gun}=  Execute JavaScript  return (window.sessionStorage.getItem('gun'));
    Should Be Equal  ${level}  5
    Should Be Equal  ${health}  5
    Should Be Equal  ${killedEnemies}  5
    Should Be Equal  ${gun}  ak

Game over
    Execute JavaScript  window.sessionStorage.setItem("level", 5);
    Execute JavaScript  window.sessionStorage.setItem("killedEnemies", 5);
    Execute JavaScript   character.setHealt(0)
    Sleep   1s
    Title Should Be  Game Over
    ${level}=  Execute JavaScript  return (window.sessionStorage.getItem('level'));
    ${killedEnemies}=  Execute JavaScript  return (window.sessionStorage.getItem('killedEnemies'));
    Should Be Equal  ${level}  5
    Should Be Equal  ${killedEnemies}  5
    Click Element   id:reinicio
    Sleep   1s
    Title Should Be  Menu

Numero de enemigos
    ${n_enemies}=  Execute JavaScript  return enemys.length
    ${level}=  Execute JavaScript  return (window.sessionStorage.getItem('level') * 10);
    Should Be Equal  ${n_enemies}  ${level}


Cerrar navegador
    Sleep   1s
    Close browser