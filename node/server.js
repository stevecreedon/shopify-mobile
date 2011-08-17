var http = require('http');
var server = require('node-router').getServer();
var sys = require("sys");

var Db = require('mongodb').Db,
  	Connection = require('mongodb').Connection,
  	Server = require('mongodb').Server,
  	BSON = require('mongodb').BSONNative;

var mongo = {"hostname":"localhost","port":27017,"username":"",
	    "password":"","name":"","db":'shopify_mobile_development'}
	
var generate_mongo_url = function(obj){
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'test');

	if(obj.username && obj.password){
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}else{
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
 	}
}

var mongourl = 	generate_mongo_url(mongo);
	
var get_products = function(request, response){
	
	require('mongodb').connect(mongourl, function(err, connection){	
		connection.collection('products', function(err, collection) {
			collection.find(function(err, cursor) {
	        	cursor.toArray(function(err, docs) {
	          		response.write(JSON.stringify(docs))
	          		response.end();   
	        	});
	    	});
		});
	});
	
}

// Configure our HTTP server to respond with Hello World the root request
server.get("/products", function (request, response) {
   get_products(request, response);
});



// Listen on port 8080 on localhost
server.listen(8000, "localhost");