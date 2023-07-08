'use strict';

var Category = require('../models/CatergoryModel.js');

exports.list_all_categories = function (req, res) {
    Category.getAll(function (err, category) {
        if (err) { res.send(err); }
        res.send(category);
    });
};