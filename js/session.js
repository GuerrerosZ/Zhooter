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
        alert(this.getExtraHealth())
    }

    static getExtraHealth() {
        return sessionStorage.getItem("extraHealth");
    }

    static setExtraHealth(extraHealth) {
        sessionStorage.setItem("extraHealth", extraHealth);
        alert(this.getExtraHealth())
    }

    static getExtraHealth() {
        return sessionStorage.getItem("extraHealth");
    }
    setLevel(level) {
        sessionStorage.setItem("level", level);
    }

    getLevel() {
        return parseInt(sessionStorage.getItem("level"));
    }
}