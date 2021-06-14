const Session =  require('../js/session.js');
// import addCharacter from '../../js/session.js';

test('Deberia poder agregar info al sessionStorage y leerlo nuevamente', () => {
   	Session.setLevel(1);
   	Session.setExtraHealth(1);
   	Session.setWeakness(1);
   	Session.setKilledEnemies(1);
   	Session.setHealth(1);
   	Session.setGun('ak');
   	Session.setPremiumGun('ak');
   	var level = Session.getLevel();
   	var extraHealth = parseInt(Session.getExtraHealth());
   	var weakness = parseInt(Session.getWeakness());
   	var killedEnemies = parseInt(Session.getKilledEnemies());
   	var health = parseInt(Session.getHealth());
   	var gun = Session.getGun();
   	var premium = Session.getPremiumGun();

    expect(level).toBe(1);
    expect(extraHealth).toBe(1);
    expect(weakness).toBe(1);
    expect(killedEnemies).toBe(1);
    expect(health).toBe(1);
    expect(gun).toBe('ak');
    expect(premium).toBe('ak');


})