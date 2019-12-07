// Verify, is Sequelize works
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:rootpw@localhost:3307/cabin');

sequelize.query('SELECT * FROM test_table', {plain:false, raw:false}).
then(res => console.log('____', res));
