function usuarioValido (boolean) {
    return boolean;
}

var resposta = usuarioValido(true) ? "Entra" : "Sai";
console.log(resposta);

var respostaAutomatica = "Numero da conta " + (usuarioValido(false) ? "1234" : "indisponível" );
console.log(respostaAutomatica);

// switch

function movimento(direcao) {
    var oqvai ;
    switch (direcao){
        case "frente" :
            oqvai = "achou baú";
        break
        
        case "tras" :
            oqvai = "tropeçou";
        break

        case "direita" :
            oqvai = "parede";
        break

        case "esquerda" :
            oqvai = "porta";
        break

        default :
            oqvai = "digita direito";
    }
    return console.log(oqvai);
}

movimento("frente");
movimento("tras");
movimento("direita");
movimento("esquerda");