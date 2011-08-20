var http = require('http');
var server = require('node-router').getServer();
var sys = require("sys");

var common = require('./resources/common');

common.mongo.db.open(function(e, db) {
	
   var products = require('./resources/products');
   var collections = require('./resources/collections');
   var collects = require('./resources/collects');
	
   server.resource('products', products.controller);
   server.resource('collections', collections.controller);
   server.resource('collects', collects.controller);
	
	// Listen on port 8080 on localhost
   server.listen(8000, "localhost");
})


