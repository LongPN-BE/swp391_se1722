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
        .get(brandCtrl.list_all_brands)
        .post(brandCtrl.create_a_brand);
    app.route('/brands/:brandId')
        .get(brandCtrl.get_a_brand)
        .put(brandCtrl.update_a_brand)
        .delete(brandCtrl.delete_a_brand);

    // category Routes
    var categoryCtrl = require('../controllers/categoryController');
    app.route('/categories')
        .get(categoryCtrl.list_all_categories)
        .post(categoryCtrl.create_a_category);
    app.route('/categories/:categoryId')
        .get(categoryCtrl.get_a_category)
        .put(categoryCtrl.update_a_category)
        .delete(categoryCtrl.delete_a_category);

    // product Routes
    var productCtrl = require('../controllers/productController');
    app.route('/products')
        .get(productCtrl.list_all_products)
        .post(productCtrl.create_a_product);
    app.route('/products/:productId')
        .get(productCtrl.get_a_product)
        .put(productCtrl.update_a_product)
        .delete(productCtrl.delete_a_product);
    // review Routes
    // order Routes
    // orderdetail Routes
};