class Session {
    constructor() {
    }

    addCharacter(character){
        sessionStorage.setItem("character", JSON.stringify(character));
    }

    getCharacter() {
        var respuesta = JSON.parse(sessionStorage.getItem("character"));
        var character = new Character(respuesta['id']);
        return character;
    }
}
