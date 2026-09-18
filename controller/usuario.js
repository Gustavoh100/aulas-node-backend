import ServiceUsuario from '../service/usuario.js'


class ControllerUsuario {
    // recebimento e saida das informações  
    async Buscar(req, res) {
        try {
            console.log(req.session)
            const usuarios = await ServiceUsuario.Buscar()
            res.send({ mensagem: usuarios })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const usuario = await ServiceUsuario.Detalhe(id)

            res.send({ mensagem: usuario })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Criar(req, res) {
        try {
            const {  email, senha } = req.body

            await ServiceUsuario.Criar(email, senha)
            res.send({ mensagem: "cadastro com sucesso " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

  async  Alterar(req, res) {
        try {
            const id = req.session.id
            const { email, senha } = req.query

         await   ServiceUsuario.Alterar(id, email, senha)
            res.send({ mensagem: "alterado com sucesso " })
        } catch (error) {

            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

   async Deletar(req, res) {
        try {
            const identificador = req.session.id

          await ServiceUsuario.Deletar(identificador)
            res.send({ mensagem: "deletado " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Login(req,res){
        try {
            const {email , senha } = req.body
            const token = await ServiceUsuario.Login(email , senha)
            res.status(200).send({
              token
            })
            
        } catch (error) {
            res.status(500).send({
            message : error.message
            })
        }

    }
} export default new ControllerUsuario()