(function() {
    session = new Session();
    level = Session.getLevel();
    character = session.getCharacter();
    character.setHealt(parseInt(Session.getHealth()));
    enemys = [];
    for (var i = 0; i < 10 * level; i++) {
        var enemy = new Enemy(1);
        character.subscribe(enemy);
        enemys.push(enemy);
    }

    setInterval(runEnemy, 500);

    function runEnemy() {
        if (enemys.length == 0) {
            Session.setLevel(parseInt(level) + 1);
            Session.setWeakness(0);
            window.location.replace('tienda.php');
        }
        for (var i = 0; i < enemys.length; i++) {
            enemys[i].run();
        }
    }

}());