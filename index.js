// Importando o express
const express = require("express");
// Inicioando o express
const app = express(); 

//rota principal
app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao meu site!</h1>")
})
// rota perfil

app.get("/perfil", function(req, res){
    res.send("<h1> Perfil do Usuario</h1>")
    })

//inciando servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!)");
    } else {
            console.log("Servidor iniciado com sucesso!");
    }
});
