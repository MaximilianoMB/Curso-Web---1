//reference type

let objeto1 = {value: 10};
let objeto2 = objeto1;
let objeto3 = {value: 10};

// context vs scope

const objeto4 = {
    a : function() {
        console.log(this);
    }
}

//instantiation

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    instroduce(){
        console.log(`Oi, meu nome é ${this.name}, eu sou ${this.type}`);
    }
}

class Mago extends Player {
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`Aeeee eu sou ${this.type}`);
    }
}

const mago1 = new Mago("Taric","Curandeiro");
const mago2 = new Mago("Ryze","Invocador");