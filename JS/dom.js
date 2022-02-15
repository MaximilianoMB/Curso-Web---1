var h1 = document.querySelector("h1");

function botao(){
    h1.className = "tituloFoda";
}

var button = document.getElementById("foda");
    
button.addEventListener("click", function() {
    console.log("Clicou!!");
})

var entrada = document.getElementById("entrada");
var input = document.getElementById("input");

function inputLength() {
    return input.value.length;
}

function adicionaItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var ul = document.querySelector("ul");
    ul.appendChild(li);
    input.value = '';
}

function insereBotao() {
    if (inputLength() > 0 ){
        adicionaItem();
    }
}

function insereEnter() {
    if (input.value.length > 0 && event.which === 13 ){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        var ul = document.querySelector("ul");
        ul.appendChild(li);
        input.value = '';
    }
}

entrada.addEventListener("click", insereBotao); 

input.addEventListener("keypress", insereEnter);
