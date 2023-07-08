'use strict';

var Brand = require('../models/BrandModel.js');

exports.list_all_brands = function (req, res) {
    Brand.getAll(function (err, brand) {
        if (err) { res.send(err); }
        res.send(brand);
    });
};