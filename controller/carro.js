import ServiceCarro from '../service/carro.js'


class ControllerCarro {
    // recebimento e saida das informações  
    async Buscar(req, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = await ServiceCarro.Detalhe(id)

            res.send({ mensagem: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    async Criar(req, res) {
        try {
            const {  marca, ano } = req.body

            await ServiceCarro.Criar(marca, ano)
            res.send({ mensagem: "cadastro com sucesso " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

  async  Alterar(req, res) {
        try {
            const id = req.body.id
            const { marca, ano } = req.query

         await   ServiceCarro.Alterar(id, marca, ano)
            res.send({ mensagem: "alterado com sucesso " })
        } catch (error) {

            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

   async Deletar(req, res) {
        try {
            const identificador = req.body.id

          await ServiceCarro.Deletar(identificador)
            res.send({ mensagem: "deletado " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
} export default new ControllerCarro()