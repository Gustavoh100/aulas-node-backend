
import express from 'express'


const app = express()
// somar 
app.get ("/api/v1/somar", (req, res ) => {
const { num1 , num2 } = req.query 
const resultado = Number(num1) + Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.get ("/api/v1/subtrair", (req, res ) => {
const { num1 , num2 } = req.query 
const resultado = Number(num1) - Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.get ("/api/v1/dividir", (req, res ) => {
const { num1 , num2 } = req.query 
const resultado = Number(num1) / Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.get ("/api/v1/mutiplicar", (req, res ) => {
const { num1 , num2 } = req.query 
const resultado = Number(num1) * Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.listen(3000, () => {
    
    console.log("servidor rodando  na porta 3000")
});


