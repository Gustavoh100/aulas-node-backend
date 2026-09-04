
import RepositoryCarro from '../repository/carro.js'



class ServiceCarro {
    async Buscar() {
        return RepositoryCarro.Find()

    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("favor informar ")
        }
        const carro = await RepositoryCarro.FindById(id)
        if (!carro) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }
        return carro
    }
    // função ()
    async Criar(marca, ano) {
        if (!marca || !ano) {
            throw new Error("favor informar todos os dados ")
            return
        }
        const carro = await RepositoryCarro.Create(marca, ano)


        return carro
    }

    async Alterar(id, marca, ano) {
        if (!id || !marca || !ano) {
            throw new Error("favor informar id ")
        }
        const carroAlterado = await RepositoryCarro.Update(id, marca, ano)
        
        return carroAlterado

    }

    async Deletar(id) {

        if (!id) {
            throw new Error("favor informar ")
        }
        const carro = RepositoryCarro.Delete(id)
        return id
    }

} export default new ServiceCarro()