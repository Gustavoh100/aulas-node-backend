import express from "express"
import ControllerUsuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()
router.post("/login", ControllerUsuario.Login  )

// buscar todos
router.get("/buscar", authMiddleware , ControllerUsuario.Buscar)
// buscar um 

router.get("/detalhe/:id", ControllerUsuario.Detalhe)
// criar 
router.post("/criar", ControllerUsuario.Criar)
//  alterar  
router.put("/alterar", ControllerUsuario.Alterar)
// deletar 
router.delete("/deletar", ControllerUsuario.Deletar
)

export default router