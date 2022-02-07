var todos = [
    "limpar a casa",
    "cortar a grama",
    "pegar o mickey",
    "alimentar dogs",
];

for (var i=0; i<todos.length; i++) {
    todos[i] = todos[i] + "!!!";
}

console.log(todos);

var contador1 = 0;
while (contador1 < 11) {
    console.log(contador1);
    contador1++;
};

var contador2 = 1+0;
do {
    console.log(contador2);
    contador2--;
}while (contador2>0);

//forEach

todos.forEach(console.log)