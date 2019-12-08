// Verify, is Sequelize works
const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(`mysql://${process.env.SQL_USER}:${process.env.SQL_PASS}@
${process.env.SQL_HOST}:${process.env.SQL_PORT}/${process.env.SQL_DB}`);

sequelize.query('SELECT * FROM test_table', {plain:false, raw:false}).
then(res => console.log('____', res));
