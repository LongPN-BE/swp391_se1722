'use strict';

var Brand = require('../models/BrandModel.js');

exports.list_all_brands = function (req, res) {
    Brand.getAllBrand(function (err, brand) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', brand);
        res.send(brand);
    });
};