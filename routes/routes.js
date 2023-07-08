'use strict';
module.exports = function (app) {
    // user Routes
    var userCtrl = require('../controllers/userController');
    app.route('/users')
        .get(userCtrl.list_all_users);

    // brand Routes
    var brandCtrl = require('../controllers/brandController');
    app.route('/brands')
        .get(brandCtrl.list_all_brands);

    // category Routes
    var categoryCtrl = require('../controllers/categoryController');
    app.route('/categories')
        .get(categoryCtrl.list_all_categories);
};