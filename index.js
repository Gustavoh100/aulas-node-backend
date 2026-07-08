// hello.js
import express from 'express'
import bancoDeDados from './repository/index.js';

// server ou app 
const app = express()
//configurar uma rota para metodo http get na raiz ("/") do aplictivo.
  // paht params - router 
// app.get("/api/v1/subtrair", (req, res) => {
// //query params 
//     const num1 = Number (req.query.num1);
//     const num2 = Number (req.query.num2);
//     const resultado = num1 - num2 
// // retorna uma resposta JSON contendo uma mensage "hello world!"
//   res.send({ resultado })
// }); 

// HTTP -  POST  ,   GET    , PUT ,  DELETE 
//CRUD - CREATE ,  READ ,  UPDATE AND DELETE 
// buscar 
app.get("/api/pessoa/:id", (req, res) => {
  const id = req.params.id
  const pessoa =  bancoDeDados.find( it => it.id == id)
  if(!pessoa){
  res.send({  message: "pessoa não encontrada "})
  return 
}
 res.send({ pessoa})
});
// criar 
app.get("/api/pessoa" ,(req , res) => {
 const { id  , name  } = req.query
 if(!id || !name){
 res.send({  message: "favor informar um id e um name"})
 return 
}
 bancoDeDados.push({id , name })
 console.log(bancoDeDados)
 res.send({ message: " pessoa criada com sucesso " })
});
//alterar 
app.get("/api/Delete"  , (req , res ) => {
const id = req.params.id;

const pessoa = bancoDeDados.find(it => it.id == id );



});

// inicia o servidor express na porta 3000 e define uma função de retorno de chamada.
app.listen(3000, () => {
    //exibe uma mensagem no console quando o servidor estiver ativo. 
    console.log("servidor rodando  na porta 3000")
});


