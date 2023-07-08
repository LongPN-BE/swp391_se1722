'use strict';

var User = require('../models/UserModel.js');

exports.list_all_users = function(req, res) {
    User.getAllUser(function(err, user) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};