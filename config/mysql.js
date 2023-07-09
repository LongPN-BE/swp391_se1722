'user strict';

const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "12345",
    database: process.env.DB_NAME || "swp391_se1722",
    port: "3306",
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;