'user strict';
var sql = require('../config/mysql');

// Brand object constructor
var Brand = function (brand) {
    console.log(brand);
};

Brand.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.brand", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('brands : ', res);
            result(null, res);
        }
    });
};


module.exports = Brand;