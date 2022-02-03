var usuario = {
    nome: "cocozao",
    idade: 32,
    hobby: "guitarra",
    casado: true,
};

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.hobby);
console.log(usuario.casado);

usuario.Fuma = true;
console.log(usuario);
usuario.Transporte = ["bicicleta","moto"];

console.log(usuario.Transporte[1]);

var moto = [
    {
    tipoMotor : "gasolina",
    cilindrada : "400cc",
    },
    {
     capacete : "azul",
     cortaPipa: true,   
    }
];

console.log(moto[1].cortaPipa);
usuario.peidar = function () {console.log("Prrt!")};

usuario.peidar();