var lista = ["tigre","cachorro","urso","passaro"];
console.log(lista[0]);

var boolean = [true, false, false, true];

var listaFuncoes = [function pegaCopo(){ console.log("pegou copo")},function poeCerveja(){console.log("pos cerveja")}];
console.log(listaFuncoes);

var listaMista = ["coco", 1, 2, undefined, false, function bebeCopo(){console.log("bebeu breja")}];
console.log(listaMista);

// arrays de preferencia devem conter dados do mesmo tipo

var array = ["primeiro nivel",["segundo nivel","segundo nivel2"]];
console.log(array[1][1]);

//alguns metodos com array

lista.shift();
console.log(lista);
lista.pop();
console.log(lista);
lista.push("beija-flor");
console.log(lista);

var novaLista = lista.concat(["abelha", "jacaré"]);
console.log(novaLista);