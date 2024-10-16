import express from "express"
const router = express.Router()
// IMPORTANDO OS MODELS
import Cliente from "../models/Cliente.js"

// ROTA CLIENTES
router.get("/clientes", function( req, res){
    Cliente.findAll().then(clientes =>{
        res.render("clientes",{clientes:clientes})
    })
 })

 // ROTA DE CADASTRO DE CLIENTES
 router.post("/clientes/new", (req, res) =>{
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Cliente.create({
        nome : nome,
        cpf : cpf,
        endereco : endereco
    }).then (()=>{
        res.redirect("/clientes")
    })
 })

export default router