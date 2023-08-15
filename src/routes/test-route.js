import express from 'express';
const winston = require('winston');
const logger = require('./logger');

logger.info('Service started.');


express.get('/test', function(req, res, next) {
    var first_name = 'test';
    var email = 'test@test.com';
    console.log(first_name);
    logger.error(email);
    return ProductModel.find(function (err, products) {
        if (!err) {
            res.render('app', {products: products, root: URL_ROOT});
        } else {
            console.log(err);
            res.render('error', err);
        }
    });
});
