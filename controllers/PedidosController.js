import express from "express"
const router = express.Router()


router.get("/pedidos", function( req, res){
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




export default router