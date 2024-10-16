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
   

export default router