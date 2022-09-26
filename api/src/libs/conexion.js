const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const {setupModels} = require('../db/index');

const USER = encodeURIComponent(config.user_db);
const PASS = decodeURIComponent(config.password_db);

const URL = `mysql://${USER}:${PASS}@localhost:${config.port_db}/${config.name_db}`;

const sequelize = new Sequelize(URL, {
    dialect: 'mysql',
    logging: false
})

setupModels(sequelize);

module.exports = sequelize;