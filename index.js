
import express from 'express'


const app = express()


app.use(express.json())
// somar
// post somente para cadastro ou quando é obrigatorio 
app.post ("/api/v1/somar", (req, res ) => {
const { num1 , num2 } = req.body 
const resultado = Number(num1) + Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.post("/api/v1/subtrair", (req, res ) => {
const { num1 , num2 } = req.body
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
app.get ("/api/v1/exer2", (req, res ) => {
const { num1 , num2 } = req.query 
const resultado = Number(num1) * Number(num2)
// if else 
res.send({
    message : resultado 
  })
})
app.post ("/api/v1/exer3", (req, res ) => {
const { salarioH , horas } = req.body 
const resultado = Number(horas) * Number(salarioH)
// if else 
res.send({
    message  : " seu salario : " , resultado: resultado })
})

app.post ("/api/v1/exer4", (req, res ) => {
const { p1 , p2 , p3, p4 , p5 ,  } = req.body 
const media = Number(p1) +Number(p2) +Number(p3) +Number(p4) +Number(p5) / 5
// if else 
res.send({
    message  : " media dos pesos são  : " , media : media  })
})
app.post ("/api/v1/exer5", (req, res ) => {
const { Celsius  } = req.body 
const Fahrenheit = ( 9 * Number(Celsius) + 160  ) / 5
// if else 
res.send({
    message  : " em fahrenheit : " , Fahrenheit : Fahrenheit })
})
app.post ("/api/v1/exer6", (req, res ) => {
const { segundos  } = req.body
const minutos = Number(segundos) / 60
const horas = Number(minutos) / 60
// if else 
res.send({
    message : " em horas ", horas : horas , minutos : minutos 
  })
})


app.listen(3000, () => {
    
    console.log("servidor rodando  na porta 3000")
});


