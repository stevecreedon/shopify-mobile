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
		reader:{
				type: 'json',
		}	
	}
});

mobi.models.Product.fromStore = function(id){
		var store = Ext.StoreMgr.getByKey('product-store');
		return store.getById(id);
}

mobi.models.Product.fromLoad = function(id, options){
			var tmp = new mobi.models.Product({_id: id}, null);
			mobi.models.Product.load('123', {
		        	records: [tmp],
		         	success: function(product, operation){
						options.args.product = product;
						options.success(options.args);
					},
					callback: function(product, operation){
						if(operation.exception){
							
						}else{
							store.insert(0, [product]);
						}
					}
		    });
}


var store = new Ext.data.Store({
    model: 'Product',
	storeId: 'product-store'
})

store.on('add', function(store, records, index){
	console.log("product added")
	console.log(store);
	console.log(records);
	console.log(index);
})