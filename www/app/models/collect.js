mobi.models.Collect = Ext.regModel('Collect', {
	fields: [
		{name: "product_title", type: "string"},
		{name: 'product_url', convert: function(value, record) {return mobi.views.shopifyImage(value, "thumb");}},
		{name: "product_id", type: "int"},
		{name: "collection_id", type: "int"},
		{name: "_id", type: "int"}
	],
	idProperty: "_id",
	associations: [
	        {type: 'belongsTo', model: 'Collection'},
	        {type: 'belongsTo', model: 'Product', foreignKey: "_id", primaryKey: "product_id"}
	],
	proxy: {
		type: 'rest',  //NOT AJAX!!!
		url: '/db/collects',
		reader:{
			type: 'json',
		}	
	}
});
