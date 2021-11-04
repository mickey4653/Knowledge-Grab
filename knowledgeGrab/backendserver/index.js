const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyparser.json());



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


app.get('/', (req, res) => {
    let sql = "select * from user_signup";
    db.query(sql, (err, results) => {

        if (err) throw err;
        res.send(results);
    });
    // res.send('Hey there!');
});


app.listen(3000, () => {
    console.log('server is running...');

});