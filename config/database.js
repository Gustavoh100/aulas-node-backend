import { Sequelize } from "sequelize"

class DataBase {
    constructor() {
        this.init()

    }
    init() {
        this.db = new Sequelize({
            database: "exemplo",
            host: "localhost",
            username: "root",
            passowrd: "",
            dialect: "mysql"
        })
    }
}
export default new DataBase





















