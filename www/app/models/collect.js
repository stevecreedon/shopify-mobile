Ext.regModel('Collect', {
	fields: [
		{name: "product_title", type: "string"},
		{name: 'product_url', convert: function(value, record) {return mobi.views.shopifyImage(value, "thumb");}},
		{name: "product_id", type: "string"},
		{name: "collection_id", type: "string"},
		{name: "_id", type: "string"}
	],
	idProperty: "_id",
	associations: [
	        {type: 'belongsTo', model: 'Collection'}
	],
	proxy: {
		type: 'ajax',
		url: '/db/collects',
		reader:{
			type: 'json',
		}	
	}
});

mobi.stores.collects = new Ext.data.Store({
       id: 'mobi_collection_products',
       model: 'Collect',
})