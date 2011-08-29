var sys = require("sys");
var common = require("./common");
var db = common.mongo.db;
exports.controller = {
	index: function(request, response){
      
		db.collection('products', function(err, collection) {
			collection.find(function(err, cursor) {
		        cursor.toArray(function(err, docs) {
		          	response.write(JSON.stringify(docs))
		          	response.end();   
		        });
		    });
		});

	},
	show: function(request, response, id){

		db.collection('products', function(err, collection) {
			collection.find({'_id':parseInt(id)}, function(err, cursor) {
	            cursor.nextObject(function(err, doc) {          
	              	response.write(JSON.stringify([doc]))
	          		response.end();
	            });
	        });
		});

	}
}
