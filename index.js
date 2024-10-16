// IMPORTANDO O EXPRESS
import express from "express"
//INICIANDO O EXPRESS
const app = express()
//PERMITE RECEBER DADOS VINDO DE FORMULARIOS
app.use(express.urlencoded({ extend: true}))
app.use(express.json())
// IMPORTANDO OS CONTROLLERS (ONDE ESTAO AS ROTAS)
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"
//DEFININDO O USO DAS ROTAS DOS CONTROLLERS
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)
// indicar  EJS
app.set('view engine', 'ejs');
// UTILIZACAO DA PASTA PUBLIC PARA ARQUIVOS ESTATICOS EX IMAGEM CSS OU JAVASCRIPT
app.use(express.static('public'));


// IMPORTE O SEQUELIZE
import connection from "./config/sequelize-config.js";

// REALIZANDO A CONEXAO COM O BANCO DE DADOS
    connection.authenticate().then(()=>{
        console.log("Conexao com o banco de dados feita com sucesso!")
    }).catch((error)=>{
        console.log(error)
    })
// CRIANDO O BANCO DE DADOS SE ELE NAO EXISTIR
connection.query(`CREATE DATABASE IF NOT EXISTS loja;`).then(()=>{
    console.log("o banco de dados esta criado.")
}).catch((error) => {
    console.log(error)
})  
//PERMITE RECEBER DADOS VINDO DE FORMULARIOS
    app.use(express.urlencoded({ extend: true}))
    app.use(express.json())

// ROTA DE CADASTRO DE CLIENTES


/*
// Importando o express
const express = require("express");
// Inicioando o express
const app = express(); 
app.get ("/", function(req, res){
    res.render("index")
})
app.get("/perfil", function (req, res){
    res.render("perfil")
})
// UTILIZACAO DA PASTA PUBLIC PARA ARQUIVOS ESTATICOS EX IMAGEM CSS OU JAVASCRIPT
app.use(express.static('public'));


// ROTA Pedidos
app.get("/pedidos", function( req, res){
    var pedidos = [
        { numero: 1, preco: "R$:10.000,00"},
        { numero: 2, preco: "R$:2.000,00"},
        { numero: 3, preco: "R$:20.000,00"},
        { numero: 4, preco: "R$:15.000,00"}
    ]
    res.render ("pedidos", {
        pedidos: pedidos
    })
})
// ROTA Produtos
app.get("/produtos", function( req, res){
    var produtos = [
        { nome: "Iphone", preco: "R$:3000,00", categoria: "Celular"},
        { nome: "MacBook Pro", preco: "R$:15000,00", categoria: "Computador" },
        { nome: "Samsung Galaxy S21", preco: "R$:4000,00", categoria: "Celular" },
        { nome: "Apple Watch", preco: "R$:2500,00", categoria: "Smartwatch" }
    ]
    res.render ("produtos", {
        produtos: produtos
    })
})
// ROTA CLIENTES
app.get("/clientes", function( req, res){
    var cadastros = [
        { nome: "Ricardo", cpf: "123.456.789-10", endereco: "rua x"},
        { nome: "Monica", cpf: "321.654.987-01", endereco: "rua y"},
        { nome: "Vitoria", cpf: "111.222.333-03", endereco: "rua z"},
        { nome: "Enzo", cpf: "444.555.666-08", endereco: "rua w"},
    ]
    res.render ("clientes", {
        cadastros: cadastros
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
