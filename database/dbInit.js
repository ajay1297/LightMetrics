const {Sequelize} = require('sequelize');
const config = require('config');
const databasename = config.get('database');
const username = config.get('username');
const password = config.get('password');
const hostname = config.get('host');
const dialect = config.get('dialect');

const sequelize = new Sequelize(databasename, username, password, {
    'host':hostname,
    'dialect':dialect
});

module.exports = sequelize;