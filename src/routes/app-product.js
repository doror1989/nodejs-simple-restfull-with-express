import express from 'express';
var router = express.Router();
var ProductModel = require('../model/product');
const URL_ROOT = "http://localhost:3000";

express.get('/', function(req, res, next) {
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

router.get('/form', function(req, res, next) {
    var product = {
        title: '',
        description: '',
        price: '',
        modified:''
    };
    res.render('app-form', {product: product, isNew: true, root: URL_ROOT});
});

router.get('/form/:id', function(req, res, next) {
    if(!req.params.id){
        var product = {
            title: '',
            description: '',
            price: '',
            modified:''
        };
        res.render('app-form', {product: product, isNew: true, root: URL_ROOT});
    }else{
        return ProductModel.findById(req.params.id, function (err, product) {
            if (!err) {
                res.render('app-form', {product: product, isNew: false, root: URL_ROOT});
            } else {
                console.log(err);
                res.render('error', err);
            }
        });
    }
});

module.exports = router;
