const dbConn = require("./../config/db.config");

//create user object

// constructor
const User = (user) => {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
};
User.create = (newUser, result) => {

    // insert data


    dbConn.query("INSERT INTO  user_signup set ?", newUser, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);

        }
    });
};

//get all data
User.findAll = () => {

    dbConn.query("SELECT * from user_signup", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
        } else {
            console.log('users:', res);
            result(null, res);

        }

    });

};
module.exports = User;
