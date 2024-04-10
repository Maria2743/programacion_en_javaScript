import animal from `./animal.js`

class leon extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);

    }

    Rugir() {

    }
}

class lobo extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {

    }
}

class oso extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Grunir() {

    }
}

class serpiente extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {

    }
}

class aguila extends animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Chillar() {

    }
}

export { leon, lobo, oso, serpiente, aguila };

