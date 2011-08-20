var sys = require("sys");
var common = require("./common");
var db = common.mongo.db;
var url = require('url')
exports.controller = {
	index: function(request, response){	
		var urlObj = url.parse(request.url, true);
	    var query = {};

		if(urlObj.query.collection_id){
			query = {"collection_id": parseInt(urlObj.query.collection_id)}
		}
	
		db.collection('collects', function(err, collection) {
			collection.find(query, function(err, cursor) {
		        cursor.toArray(function(err, docs) {
		          	response.write(JSON.stringify(docs))
		          	response.end();   
		        });
		    });
		});

	},
	show: function(request, response, id){

		db.collection('collects', function(err, collection) {
			collection.find({'_id':parseInt(id)}, function(err, cursor) {
	            cursor.nextObject(function(err, doc) {          
	              	response.write(JSON.stringify(doc))
	          		response.end();
	            });
	        });
		});

	}
}