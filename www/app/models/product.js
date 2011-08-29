mobi.models.Product = Ext.regModel('Product', {
	fields: [
		{name: "title", type: "string"},
		{name: "body_html", type: "string"},
		{name: "price", type: "float"},
		{name: "image_url", type: "string"},
		{name: "_id", type: "int"}
	],
	idProperty: "_id",
	associations: [
		        	{type: 'hasMany', model: 'Collect', primaryKey:"_id", storeConfig: {id: "mobi-collects-store"}}
				],
	proxy: {
		type: 'rest',  //NOT AJAX!!!
		url: '/db/products',
		appendId: true,
		reader:{
				type: 'json',
		}	
	}
});

new Ext.data.Store({
       model: 'Product',
	   storeId: 'product-store'
})