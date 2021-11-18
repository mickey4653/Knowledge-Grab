const mysql = require('mysql2');
// connecting to mysql database
const db = mysql.createConnection({
    host: '54.174.115.150',
    user: 'knowledgegrab',
    password: 'knowledgegrab',
    database: 'test_user_reg',
    port: 3306
});
// check database connection
db.connect(err => {
    if (err) { console.log(err, 'dbError!'); }
    console.log('Database Connected...');
});
module.exports = db;
