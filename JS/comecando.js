var database = [
{
    username : "makiro",
    password : "secreto", 
},
{
    username : "bomi",
    password : "auau", 
},
{
    username : "passi",
    password : "auauau", 
},
{
    username : "balei",
    password : "au", 
},
];

var newsFeed = [
    {
        username : "baldo",
        timeline : "bora lá",
    },
    {
        username : "tivão",
        timeline : "js forever",
    }
]

var checkUsuario = prompt("quale seu login?");
var checkSenha = prompt("quale a senha?");

function validaLogin(username, password) {
    for (var i=0; i<database.length;i++){

        if (database[i].username === checkUsuario && database[i].password === checkSenha) {
            return true;
        } 
        return false
    }   
}

function signIn(username, password) {
    if (validaLogin(username, password) === true){
            console.log(newsFeed);
    } else {
            alert("errrrrou!!");
    }
}   


signIn(checkUsuario, checkSenha);