function sayHello() {
    console.log("Hello!");
}

sayHello();

var falarTchau = function() {
    console.log("Tchau!");
}

falarTchau();

function cantar() {
    console.log("CACACACACA");
    console.log("BlaBlaLalala");
}

cantar();

function letras(letra) {
    console.log(letra);
}

letras("bilu bilu teteia");
letras("aluei istnouei");
letras("eu ia li chama");
letras("tchucuracktchucurei");

// UTEIS

function multiplicar(a, b) {
    console.log(a*b);
}

multiplicar(5, 10);

function dividir(a, b) {
   if (a < b) {
    return "coco";
   } else {
       console.log("nao chegou");
   }  
}

console.log(dividir(3, 5));
