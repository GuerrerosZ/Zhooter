*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${browser}  headlessfirefox
${pagina}  http://localhost/Zhooter

*** Test Cases ***
TR1_2
    Ejecutar juego
    Frenar zombis
    ${xPosOld}=  Execute JavaScript   return parseInt(character.getX());
    ${yPosOld}=  Execute JavaScript   return parseInt(character.getY());
    Mover characterW
    ${yPosActual}=  Execute JavaScript    return parseInt(character.getY());
    Should Be True    ${yPosOld}>${yPosActual}
    ${yPosOld}=  Set Variable  ${yPosActual}
    Mover characterA
    ${xPosActual}=  Execute JavaScript    return parseInt(character.getY());
    Should Be True    ${xPosOld}>${xPosActual}
    ${xPosOld}=  Set Variable  ${xPosActual}
    Mover characterS
    ${yPosActual}=  Execute JavaScript    return parseInt(character.getY());
    Should Be True    ${yPosOld}<${yPosActual}
    Mover characterD
    ${xPosActual}=  Execute JavaScript    return parseInt(character.getY());
    Should Be True    ${xPosOld}<${xPosActual}
    Cerrar navegador

TR1_3
    Ejecutar juego
    Frenar zombis
    Disparar
    Cerrar navegador

TR1_4
    Ejecutar juego
    Press Keys    none    P
    Sleep  1s
    Title Should Be  Pausa
    Cerrar navegador

TR1_5
    Ejecutar juego
    Frenar zombis
    Cambiar arma
    Cerrar navegador

TR1_6
    Ejecutar juego
    Pasar de nivel
    Usar tienda
    Cerrar navegador

TR2_1
    Ejecutar juego
    Recorrer vistas
    Cerrar navegador

TR2_2
    Open browser    ${pagina}   ${browser}
    Click Element   class:button
    Sleep   1s
    Title Should Be  Seleccionar Personaje
    Cerrar navegador

TR2_3
    Ejecutar Juego
    ${character}=   Execute JavaScript   return session.getCharacter().id;
    Should Be Equal  ${character}  1
    Cerrar navegador

TR2_4
    Ejecutar juego
    Mover characterW
    Press Keys    none    ARROW_DOWN
    ${message}=  Execute JavaScript  return document.getElementById('stats').toString()
    Should Not Be Equal As Strings    ${message}    None
    Cerrar navegador

TR2_5
    Ejecutar juego
    Pasar de nivel
    Comprar mejoras
    Cerrar navegador

TR2_6
    Ejecutar juego
    Pausa
    Cerrar navegador

TR2_7
    Ejecutar juego
    Estadisticas
    Cerrar navegador

TR2_8
    Ejecutar juego
    Game over
    Cerrar navegador

TR3_1
    Ejecutar juego
    Frenar zombis
    Numero de enemigos
    Cerrar navegador

TR3_2
    Ejecutar juego
    Frenar zombis
    ${width}    ${height}=  Get Window Size
    ${maxenemys}=   Execute JavaScript   return enemys.length
    ${i}=   Set Variable   ${0}
    FOR   ${i}   IN RANGE   ${maxenemys}
        ${Xpos}=   Execute JavaScript   return enemys[${i}].xPos
        ${Ypos}=   Execute JavaScript   return enemys[${i}].yPos
        IF   ${width} == ${Xpos}
        Log   ok
        ELSE IF   ${height} == ${Ypos}
        Log   ok
        ELSE
        Cerrar navegador
        Fail   El enemigo no aparece en el Borde
        END
    END
    Cerrar navegador

TR3_3
    Ejecutar juego
    ${charPos}=   Execute JavaScript   return character.getX()
    ${initXpos}=   Execute JavaScript   return enemys[1].xPos
    ${dist1}=   Execute JavaScript   return ${initXpos}-${charPos}
    Sleep   2s
    ${lastXpos}=   Execute JavaScript   return enemys[1].xPos
    ${dist2}=   Execute JavaScript   return ${lastXpos}-${charPos}
    Should Not Be Equal   ${dist1}   ${dist2}
    Cerrar navegador

TR3_5
    Ejecutar juego
    Pasar de nivel
    Sleep   1s
    Title Should Be  Tienda de Zhooter
    Cerrar navegador

TR3_6
    Ejecutar juego
    Frenar zombis
    Execute JavaScript    character.setHealt(0)
    Sleep   1s
    Title Should Be  Game Over
    Cerrar navegador

TR3_7
    Ejecutar juego
    Frenar zombis
    Execute JavaScript    for  (var i = enemys.length -1; i >= 1; i--) {enemys[i].setHealt(0)}
    Sleep   1s
    ${initXpos}=   Execute JavaScript    return character.getX()
    ${i}=  Set Variable   0
    FOR   ${i}   IN RANGE   10
        Press Keys    none    D
    END
    ${newXpos}=   Execute JavaScript    return character.getX()
    Should Be True   ${newXpos}==${initXpos}+200
    Cerrar navegador

TR3_8
    Ejecutar juego
    Frenar zombis
    ${character}=   Execute JavaScript   return session.getCharacter()
    Should Be True   ${character['primaryWeapon']}!=None
    Should Be True   ${character['defaultWeapon']}!=None
    Cerrar navegador

TR3_9
    Ejecutar juego
    Frenar zombis
    ${character}=   Execute JavaScript   return session.getCharacter()
    ${defaultWeapon}=   Set Variable   ${character['defaultWeapon']}
    ${initammo}=   Set Variable   ${defaultWeapon['ammo']}
    ${i}=  Set Variable   0
    FOR   ${i}   IN RANGE   10
        Press Keys    none    ARROW_DOWN
    END
    ${newcharacter}=   Execute JavaScript   return JSON.parse(window.sessionStorage.getItem('character'))
    ${newdefaultWeapon}=   Set Variable   ${newcharacter['defaultWeapon']}
    ${newammo}=   Set Variable   ${newdefaultWeapon['ammo']}
    Should Be True   ${initAmmo}==${newAmmo}
    Cerrar navegador

TR3_10
    Ejecutar juego
    Frenar zombis
    ${i}=  Set Variable   0
    FOR   ${i}   IN RANGE   20
        Press Keys    none    ARROW_DOWN
    END
    ${ammo}=   Execute JavaScript   return character.primaryWeapon["ammo"]
    Should Be Equal   ${ammo}   ${0}
    Press Keys    none    ARROW_DOWN
    ${ammo1}=   Execute JavaScript   return character.primaryWeapon["ammo"]
    Should Be Equal   ${ammo1}   ${0}
    Cerrar navegador

TR3_11
    Ejecutar Juego
    ${i}=  Set Variable   0
    FOR   ${i}   IN RANGE   20
        Press Keys    none    ARROW_DOWN
    END
    ${ammo}=   Execute JavaScript   return character.primaryWeapon["ammo"]
    Should Be Equal   ${ammo}   ${0}
    Sleep   1s
    Pasar de nivel
    Sleep   1s
    Click Element    id:b2
    Frenar zombis
    ${ammo}=   Execute JavaScript   return character.primaryWeapon["ammo"]
    Should Be Equal   ${ammo}   ${20}
    Cerrar navegador


TI_001
    Ejecutar juego
    ${character}=  Execute JavaScript  return character.toString()
    Should Be Equal As Strings    ${character}    [object Object]
    Cerrar navegador

TI_002
    Ejecutar juego
    Sleep    15s
    Title Should Be  Game Over
    Cerrar navegador

TI_003
    Ejecutar juego
    Frenar zombis
    ${arma1}=  Execute JavaScript  return character.weaponActual.getName()
    ${ammo1}=  Execute JavaScript  return character.weaponActual.getAmmo()
    Sleep    1s
    Press Keys    none    ARROW_UP
    Sleep    1s
    ${newammo1}=  Execute JavaScript  return character.weaponActual.getAmmo()
    Should Be True   ${ammo1}-1 == ${newammo1}
    Press Keys    none    SPACE
    Sleep    1s
    ${arma2}=  Execute JavaScript  return character.weaponActual.getName()
    Press Keys    none    ARROW_DOWN
    Should Not Be Equal   $(arma1)   ${arma2}
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

Pausa
    Press Keys    none    P
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('button')[1].click()
    Sleep   1s
    Click Element   id:bVolver
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('button')[0].click()
    Sleep   1s
    Press Keys    none    P
    Sleep   1s
    Execute JavaScript   document.getElementsByClassName('button')[2].click()
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

Mover characterW
    Press Keys    none    W

Mover characterA
    Press Keys    none    A

Mover characterS
    Press Keys    none    S

Mover characterD
    Press Keys    none    D
