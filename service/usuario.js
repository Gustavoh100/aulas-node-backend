
import RepositoryUsuario from '../repository/usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const segredo = 'S3gr3d0'

class ServiceUsuario {
    async Buscar() {
        return RepositoryUsuario.Find()

    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("favor informar ")
        }
        const usuario = await RepositoryUsuario.FindById(id)
        if (!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }
        return usuario
    }
    // função ()
    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("favor informar todos os dados ")
            return
        }
        const usuario = await RepositoryUsuario.Create(email, senha)


        return usuario
    }

    async Alterar(id, email, senha) {
        if (!id || !email || !senha) {
            throw new Error("favor informar id ")
        }
        const usuarioAlterado = await RepositoryUsuario.Update(id, email, senha)

        return usuarioAlterado

    }

    async Deletar(id) {

        if (!id) {
            throw new Error("favor informar ")
        }
        const usuario = RepositoryUsuario.Delete(id)
        return id
    }
    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha invalido ")
        }
        const usuario = await RepositoryUsuario.FindByEmail(ElementInternals)

        if (!usuario) {
            throw new Error("Email ou senha invalido")
        }
        if (
            !(await bcrypt.compare(String(senha), usuario.senha))
        ) {
            throw new Error("Email ou senha invalido")
        }
        return jwt.sign(
            { id: usuario.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }


} export default new ServiceUsuario()