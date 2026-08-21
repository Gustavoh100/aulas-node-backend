import ServiceCarro from '../service/carro.js'


class ControllerCarro {
    // recebimento e saida das informações  
    Buscar(req, res) {
        try {
            const carros = ServiceCarro.Buscar()
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id
            
            const carro = ServiceCarro.Detalhe(id)

            res.send({ mensagem: "cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body
           
            res.send({ mensagem: "cadastro com sucesso " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.body.id
            const { marca , ano} = req.query

             ServiceCarro.Alterar(id , marca , ano)
            res.send({ mensagem: "alterado com sucesso " })
        } catch (error) {
            
            res.status(500).send({
            mensagem: error.mensagem
            })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.body.id
          
            ServiceCarro.Deletar(id)
            res.send({ mensagem: "deletado " })
        } catch (error) {
            res.status(500).send({
                mensagem: error.mensagem
            })
        }
    }
} export default new ControllerCarro()