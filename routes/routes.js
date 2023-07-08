'use strict';
module.exports = function (app) {
    // user Routes
    var userCtrl = require('../controllers/userController');
    app.route('/users')
        .get(userCtrl.list_all_users)
        .post(userCtrl.create_a_user);
    app.route('/users/:userId')
        .get(userCtrl.get_a_user)
        .put(userCtrl.update_a_user)
        .delete(userCtrl.delete_a_user);

    // brand Routes
    var brandCtrl = require('../controllers/brandController');
    app.route('/brands')
        .get(brandCtrl.list_all_brands);

    // category Routes
    var categoryCtrl = require('../controllers/categoryController');
    app.route('/categories')
        .get(categoryCtrl.list_all_categories);

    // product Routes
    var productCtrl = require('../controllers/productController');
    app.route('/products')
        .get(productCtrl.list_all_products)
        .post(productCtrl.create_a_product);
    app.route('/products/:productId')
        .get(productCtrl.get_a_product)
        .put(productCtrl.update_a_product)
        .delete(productCtrl.delete_a_product);
};