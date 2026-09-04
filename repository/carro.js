import carro from '../model/carro.js'


//INSERT INTO carros( marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {
  async Find() {
    const carros = await carro.findAll()

    return carros
  }
  async FindById(id) {
    const carroDetalhes = await carro.findByPk(id)

    return carroDetalhes
  }
  async Create(marca, ano) {
    const criar = await carro.create({ marca, ano })


    return criar

  }
  async Update(id, marca, ano) {
    const carroAtualizar = await carro.findByPk(id)
    if (!carroAtualizar) { throw new Error("carro não encontrado ") }

    carroAtualizar.marca = marca
    carroAtualizar.ano = ano
    await carroAtualizar.save()
  }
  async Delete(id) {
    const carroDeletar = await carro.findByPk(id)

    if (!carroDeletar


    ) {
      throw new Error("carro não encontrado")
    }

    await carroDeletar.destroy()

    return carroDeletar

  }
} export default new RepositoryCarro()