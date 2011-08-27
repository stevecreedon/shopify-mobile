var sys = require("sys");
var common = require("./common");
var db = common.mongo.db;

exports.controller = {
	index: function(request, response){
		sys.log(unescape(request.url))
		db.collection('collects', function(err, collection) {
			collection.find(common.url.getFilters(request), function(err, cursor) {
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