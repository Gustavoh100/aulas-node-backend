import usuario from '../model/usuario.js'


//INSERT INTO usuario( email, senha) VALUES ("FIAT", 1998)
class RepositoryUsuario {
  async Find() {
    const usuarios = await usuario.findAll()

    return usuarios
  }
  async FindById(id) {
    const usuarioDetalhes = await usuario.findByPk(id)

    return usuarioDetalhes
  }
  async Create(email, senha) {
    const criar = await usuario.create({ email, senha })


    return criar

  }
  async Update(id, email, senha) {
    const usuarioAtualizar = await usuario.findByPk(id)
    if (!usuarioAtualizar) { throw new Error("usuario não encontrado ") }

    usuarioAtualizar.email = email
    usuarioAtualizar.senha = senha
    await usuarioAtualizar.save()
  }
  async Delete(id) {
    const usuarioDeletar = await usuario.findByPk(id)

    if (!usuarioDeletar


    ) {
      throw new Error("usuario não encontrado")
    }

    await usuarioDeletar.destroy()

    return usuarioDeletar

  }

  async FindByEmail(email) {
    return usuario.findOne({ where: {email} })
  }
} export default new RepositoryUsuario()