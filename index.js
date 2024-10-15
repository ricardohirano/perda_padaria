// Importando o express
const express = require("express");
// Inicioando o express
const app = express(); 
// indicar  EJS
app.set('view engine', 'ejs');
app.get ("/", function(req, res){
    res.render("index")
})
app.get("/perfil", function (req, res){
    res.render("perfil")
})

// ROTA PEDIDO
app.get("/pedidos", function( req, res){
    var produtos = [
        { nome: "Celular", preço: 3000},
        { nome: "Computador", preço: 4000},
        { nome: "Tablet", preço: 1500},
        { nome: "Fone", preço: 200},
    ]
    res.render ("pedidos", {
        produtos: produtos
    })
})

/*
//rota principal
app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao meu site!</h1>")
})
/* rota perfil sem paramentro

app.get("/perfil", function(req, res){
    res.send(`<h2>Seja bem vindo!</h2>`)
    })*/
/* rota perfil paramento fixo

app.get("/perfil/:nome", function(req, res){
    var nome = req.params.nome
    res.send(`<h2>ola, ${nome}! <br>Seja bem vindo!</h2>`)
    })
*/
/*
// rota perfil paramento nao obrigatorio

app.get("/perfil/:nome?", function(req, res){
    var nome = req.params.nome
    if(nome){
        res.send(`<h2>ola, ${nome}! <br>Seja bem vindo!</h2>`);
    } else {
        res.send(`<h2> Digite o seu nome para acessar seu perfil</h2>`);
    }
    
    })
*/
//inciando servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!)");
    } else {
            console.log("Servidor iniciado com sucesso!");
    }
});
