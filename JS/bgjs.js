var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("fundo");
var botao = document.getElementById("botao");

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
function fundoParsa(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

function geraFundo(){
    color1.value ="#" + Math.floor(Math.random()*16777215).toString(16); ;
    color2.value ="#" + Math.floor(Math.random()*16777215).toString(16); ;
    fundoParsa();
}

color1.addEventListener("input", fundoParsa);


color2.addEventListener("input", fundoParsa);

botao.addEventListener("click", geraFundo);
