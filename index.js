// hello.js
import express from 'express'
import cachorro from './router/cachorro.js'
// server ou app 
const app = express()
//configurar uma rota para metodo http get na raiz ("/") do aplictivo.
  // paht params - router 
app.use(express.json())
app.use('/api/v1/cachorro' , cachorro )
 // inicia o servidor express na porta 3000 e define uma função de retorno de chamada.
app.listen(3000, () => {
    //exibe uma mensagem no console quando o servidor estiver ativo. 
    console.log("servidor ouvindo na porta 3000")
});


