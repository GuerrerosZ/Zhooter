class Session {
    constructor() {}

    addCharacter(character) {
        sessionStorage.setItem("character", JSON.stringify(character));
    }

    getCharacter() {
        var respuesta = JSON.parse(sessionStorage.getItem("character"));
        var character = new Character(respuesta['id']);
        return character;
    }

    static setExtraHealth(extraHealth) {
        sessionStorage.setItem("extraHealth", extraHealth);
    }

    static getExtraHealth() {
        return sessionStorage.getItem("extraHealth");
    }

    static setLevel(level) {
        sessionStorage.setItem("level", level);
    }

    static getLevel() {
        return parseInt(sessionStorage.getItem("level"));
    }

    static setWeakness(flag) {
        if (flag == 0) {
            sessionStorage.setItem("Weakness", 0);
        } else {
            sessionStorage.setItem("Weakness", sessionStorage.getItem("level"));
        }
    }

    static getWeakness() {
        return sessionStorage.getItem("Weakness");
    }

    static setKilledEnemies(killedEnemies) {
        sessionStorage.setItem("killedEnemies", killedEnemies);
    }

    static getKilledEnemies(){
        return parseInt(sessionStorage.getItem("killedEnemies"));
    }

    static setHealth(health) {
        sessionStorage.setItem("health", health);
    }

    static getHealth(){
        return parseInt(sessionStorage.getItem("health"));
    }

    static setGun(gun) {
        sessionStorage.setItem("gun", gun);
    }

    static getGun(){
        return (sessionStorage.getItem("gun"));
    }

    static setPremiumGun(gun) {
        sessionStorage.setItem("premiumGun", gun);
    }

    static getPremiumGun(){
        return (sessionStorage.getItem("premiumGun"));
    }
}