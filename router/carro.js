import express from "express"
import carros from "../repository/carro.js"

const router = express.Router()

// buscar todos 
router.get("/buscar", (req , res ) => {
    res.send({mensagem: carros})
})
// buscar um 

router.get("/detalhe/:id", (req , res ) => {

    const id =req.params.id


    const carro = carros.find(it => it.id === id)

    res.send({mensagem:"cadastrado com sucesso"})
})
// criar 
router.post("/criar" ,(req , res ) => {
const { id , marca , ano } = req.body
if (!id || !marca || !ano ){
    res.send({ mensagem : "favor informar um nome "})
    return
}
carros.push({
    id,
    marca, 
    ano 
})
res.send({mensagem : "cadastro com sucesso "})
})
//  alterar 
router.post("/alterar", (req , res ) => {})
// deletar 
router.post("/deletar", (req , res ) => {
    const id = req.body.id
    carros.splice(it => it.id === id,1)
    res.send({mensagem: "deletado "})
})

export default router