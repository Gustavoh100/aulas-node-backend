import carro from '../controller/carro.js'
import RepositoryCarro from '../repository/carro.js'



class ServiceCarro {
    Buscar() {
        return RepositoryCarro
    }

    Detalhe(id) {
        if (!id) {
            throw new Error("favor informar ")
        }
        const carro = RepositoryCarro.find(it => it.id === id)
        if (!carro) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }
        return carro
    }
    // função ()
    Criar(id, marca, ano) {
        if (!id || !marca || !ano) {
            throw new Error("favor informar todos os dados ")
            return
        }
        RepositoryCarro.push({
            id,
            marca,
            ano
        })
        return { id, marca, ano }
    }

    Alterar(id, marca , ano) {
        if (!id) {
            throw new Error("favor informar id ")
        }
        const carro = RepositoryCarro.find(it => it.id === id)

        if (!carro) {
            throw new Error({ mensagem: "CARRO NÃO ENONTRADO " })
        }
        carro.marca = marca
          carro.ano = ano

    }

    Deletar(id) {

        if (!id) {
            throw new Error("favor informar ")
        }
        RepositoryCarro.splice(it => it.id === id, 1)

        return { id }
    }

} export default new ServiceCarro()