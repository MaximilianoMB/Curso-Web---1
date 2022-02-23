let a = 5;
let b = 10;

let obj1 = {
    name:"yi",
    password:"123",
};

let obj2 = obj1;
obj2.password = "456";

let objeto = {a:'a', b:'b', c: {profundao : "consegue me copiar?"}};

//shallow cloning

let cloneObjeto = Object.assign({},objeto);

// operador spread palmirinha

let clone2 = {...objeto};
//deep cloning
let superClone = JSON.parse(JSON.stringify(objeto));
objeto.c.profundao = "uhaehuaehuae";
console.log(objeto);
console.log(cloneObjeto);
console.log(clone2);
console.log(superClone);
