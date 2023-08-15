express.get('/', function(req, res, next) {
    return ProductModel.find(function (err, products) {
        if (!err) {
            res.render('app', {products: products, root: URL_ROOT});
        } else {
            console.log(err);
            res.render('error', err);
        }
    });
});
