'use strict';

var Category = require('../models/CatergoryModel.js');

exports.list_all_categories = function (req, res) {
    Category.getAllCategory(function (err, category) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', category);
        res.send(category);
    });
};