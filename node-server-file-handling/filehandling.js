var fs = require("fs");
/*
var express = require('express');

var app = express();

app.get('/products', function (req, res) {
    fs.readFile(__dirname, +"/" + "productdata.json", 'utf8', function (err, data) {
        if (err)
            console.log(err);
        if (data) {
            console.log(data);
            res.end(data);
        }
    });
});

var server = app.listen(8081, function () {
    var host = server.address().host;
    var port = server.address().port;
    console.log(`server is running at http://${host}:${port}`);
})

app.post('/add', function (req, res) {
    fs.readFile(__dirname + '/' + 'productdata.json', 'utf8', function (err, data) {
        if (err)
            console.log(err);

        if (data) {
            var products = JSON.parse(data);
            req.body
            products.find(p=>p.productId !== )
        }
    })
});

*/

var data = fs.readFileSync("productdata.json");

var http = require("http");

http.createServer(function (request, response) {

    
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-with,Content-Type');

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(data);

}).listen(8082);

console.log('server running at http://127.0.0.1:8082');
