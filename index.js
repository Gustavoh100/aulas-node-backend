// hello.js
import express from 'express'

// server ou app 
const app = express()
//configurar uma rota para metodo http get na raiz ("/") do aplictivo.
  // paht params - router 
app.get("/api/v1/subtrair", (req, res) => {
//query params 
    const num1 = Number (req.query.num1);
    const num2 = Number (req.query.num2);
    const resultado = num1 - num2 
// retorna uma resposta JSON contendo uma mensage "hello world!"
  res.send({ resultado })
}); // inicia o servidor express na porta 3000 e define uma função de retorno de chamada.
app.listen(3000, () => {
    //exibe uma mensagem no console quando o servidor estiver ativo. 
    console.log("servidor ouvindo na porta 3000")
});


