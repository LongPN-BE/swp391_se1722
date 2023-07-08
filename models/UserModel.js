'user strict';
var sql = require('../config/mysql');

// User object constructor
var User = function(user){
    console.log(user);
};

User.getAllUser = function getAllUser(result) {
    sql.query("Select * from swp391_se1722.user", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);
            result(null, res);
        }
    });
};


module.exports= User;