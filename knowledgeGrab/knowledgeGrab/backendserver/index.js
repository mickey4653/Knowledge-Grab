const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');


//create express app
const app = express();

//setup server port
const port = process.env.PORT || 3000;

const path = require('path');

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//parse requests of content-type - application/json
app.use(bodyparser.json());

app.use(express.json());

//define a root route
app.get('/', (req, res) => {
    res.send("Hello World!");
});

//require user routes
const userRoutes = require('./routes/user.route');

//using as middleware
app.use('/api/user_signup', userRoutes);







// app.use(express.static(__dirname + '../src/index.html'));
// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname, '../src/index.html'));

// });


// //get all data
// app.get('/', (req, res) => {
//     let sql = "select * from user_signup";
//     db.query(sql, (err, results) => {

//         if (err) throw err;
//         res.send(results);
//     });
//     // res.send('Hey there!');
// });

// // insert data
// app.get('/user_signup', (req, res) => {
//     let fName = req.body.fName;
//     let lName = req.body.lName;
//     let email = req.body.email;
//     let password = req.body.password;
//     let sql = `INSERT INTO user_signup(firstname,lastname,email,password) VALUES ("${fName},"${lName},"${email},"${password}", NOW())`;
//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         res.send(results);
//     });

// });

app.listen(port, () => {
    console.log('server is running...');
    console.log(`listening on port ${port}!`);

});
