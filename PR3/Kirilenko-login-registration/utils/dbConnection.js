const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'KirilenkoAA_login'
});
module.exports = dbConnection.promise();