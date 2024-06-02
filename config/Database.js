import {Sequelize} from "sequelize";

const db = new Sequelize('tcc','root','root',{
    host: '34.101.112.195',
    dialect: 'mysql'
});

export default db;