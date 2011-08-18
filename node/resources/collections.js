var sys = require("sys");
var common = require("./common");
var db = common.mongo.db;
var url = require('url')
exports.controller = {
	index: function(request, response){
        var urlObj = url.parse(request.url, true);
        var fields = {};
        
		if(urlObj.query.title){
			fields = {title:1}
		}
        
		db.collection('collections', function(err, collection) {
			collection.find({},fields,function(err, cursor) {
		        cursor.toArray(function(err, docs) {
		          	response.write(JSON.stringify(docs))
		          	response.end();   
		        });
		    });
		});

	},
	show: function(request, response, id){

		db.collection('collections', function(err, collection) {
			collection.find({'_id':parseInt(id)}, function(err, cursor) {
	            cursor.nextObject(function(err, doc) {          
	              	response.write(JSON.stringify(doc))
	          		response.end();
	            });
	        });
		});

	}
}