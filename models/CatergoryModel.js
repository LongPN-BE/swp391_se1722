'user strict';
var sql = require('../config/mysql');


// Category object constructor
var Category = function (category) {
    console.log(category);
};

Category.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.category", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('categories : ', res);
            result(null, res);
        }
    });
};


module.exports = Category;