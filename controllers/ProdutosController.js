import express from "express"
const router = express.Router()

// ROTA Produtos
router.get("/produtos", function( req, res){
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

export default router
