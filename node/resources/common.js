var mongodb = require('mongodb');
exports.mongo = {
	db: new mongodb.Db('shopify_mobile_development', new mongodb.Server("127.0.0.1", 27017, {}))
}