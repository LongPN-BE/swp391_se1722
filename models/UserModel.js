'user strict';
var sql = require('../config/mysql');

// User object constructor
var User = function (user) {
    console.log(user);
    this.user_name = user.user_name;
    this.user_password = user.user_password;
    this.user_email = user.user_email;
    this.user_isAdmin = user.user_isAdmin;
};

User.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

User.getById = function getById(userId, result) {
    sql.query("Select * from swp391_se1722.user where swp391_se1722.user.user_id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.create = function create(newUser, result) {
    sql.query("INSERT INTO swp391_se1722.user set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.updateById = function (id, user, result) {
    sql.query("UPDATE swp391_se1722.user SET swp391_se1722.user = ? WHERE swp391_se1722.user.user_id = ?", [user.user, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.user WHERE swp391_se1722.user.user_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;