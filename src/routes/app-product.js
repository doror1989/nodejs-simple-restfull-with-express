import express from 'express';
var router = express.Router();
var ProductModel = require('../model/product');
const URL_ROOT = "http://localhost:3000";
import http from 'http';
import https from 'https';
import axios from 'axios';
import fetch from 'node-fetch'
import got from 'got';
import request from 'superagent';

// Make a GET request
got.get('https://got.typicode.com/posts/1')
    .then(response => {
        console.log('GET Response:', response.body);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });

got.post('https://got.typicode.com/posts/1')
    .then(response => {
        console.log('GET Response:', response.body);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });


// Make a GET request
request
    .get('https://superagent.typicode.com/posts/1')
    .then(response => {
        console.log('GET Response:', response.body);
    })
    .catch(error => {
        console.error('GET Error:', error);
    });

request
    .post('https://jsonplaceholder.typicode.com/posts')
    .send({
        title: 'New Post',
        body: 'This is the content of the new post.',
        userId: 1
    })
    .then(response => {
        console.log('POST Response:', response.body);
    })
    .catch(error => {
        console.error('POST Error:', error);
    });

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Request error:', error);
    });

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80, // Default HTTP port
    path: '/posts/1',
    method: 'GET'
};

const req = https.request(options, (res) => {
    let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
        console.log(data);
    });
});

// Create a request object
const req = http.request(options, (res) => {
    let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
        console.log(data);
    });
});

// Handle connection errors
req.on('error', (error) => {
    console.error('Request error:', error);
});

// Send the request
req.end();

fetch('https://nodefetch.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

express.get('/', function(req, res, next) {
    var first_name = 'test';
    var email = 'test@test.com';
    console.log(`my: ${first_name}`);
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
