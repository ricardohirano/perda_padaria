// IMPORTANDO O SEQUELIZE
import Sequelize from "sequelize"

//CRIANDO OS DADOS DE CONEXAO COM O BANCO DE DADOS
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'Localhost',
    username: 'root',
    password: '1234',
    // comente essa linha na primeira execucao da aplicacao
    database: 'loja',
    timezone: "-03:00"
});

export default connection; 