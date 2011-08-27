var mongodb = require('mongodb');
var url = require('url');
var sys = require("sys");
exports.mongo = {
	db: new mongodb.Db('shopify_mobile_development', new mongodb.Server("127.0.0.1", 27017, {}))
}

exports.url = {
	getFilters: function(request){
		var urlObj = url.parse(request.url, true);
		var query = {}
	    
		if(urlObj.query.filter){
			sys.log(urlObj.query.filter)
			json = JSON.parse(urlObj.query.filter)
			for(j in json){
				var property, value;
				property = json[j]["property"];
				value = json[j]["value"];
				query[property] = value;
			}
		}
		
		return query
	}
}
 

