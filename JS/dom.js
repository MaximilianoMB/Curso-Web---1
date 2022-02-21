//parte do cabecalho

var h1 = document.querySelector("h1");

function botao(){
    h1.classList.toggle("tituloFoda");
}

var button = document.getElementById("foda");
    
button.addEventListener("click", function() {
    console.log("Clicou!!");
})


//parte da lista


// declara campo de input e botao de input
var entrada = document.getElementById("entrada");
var input = document.getElementById("input");

// funcao de tamanho para enxutar o codigo
function inputLength() {
    return input.value.length;
}


//funcao que adiciona um novo item inputado pelo usuario
function adicionaItem() {
    //cria uma nova tag li
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    //adiciona o botao delete com suas classes
    var X = document.createElement("button");
    X.appendChild(document.createTextNode("❌"));
    X.setAttribute("class", "delete");
    //junta na tag li
    li.appendChild(X);
    //junta na lista ul
    var ul = document.querySelector("ul");
    ul.appendChild(li);
    //reseta o valor do input
    input.value = '';
}

// funcao que insere o input usando o botao
function insereBotao() {
    if (inputLength() > 0 ){
        adicionaItem();
    }
}

//funcao que insere o input usando a tecla enter
function insereEnter() {
    if (input.value.length > 0 && event.which === 13 ){
       adicionaItem();
    }
}

// dom event listener que dispara as funcoes de inserção de novos itens
entrada.addEventListener("click", insereBotao); 

input.addEventListener("keypress", insereEnter);

//selecionando a li clicada para funcionalidade dos botoes
document.getElementById("lista").addEventListener("click",function(e){
    if(e.target && e.target.nodeName==="LI"){
        e.target.classList.toggle("done");
        
    }
   
})

//funcao botao delete

var del = document.getElementsByClassName("delete");
function botaoDel (e){
    e.target.parentElement.remove(); 
}

function deleta() {
    
    del[i].onclick = botaoDel;               
}

for (i=0; i<del.length; i++){
    deleta();
}