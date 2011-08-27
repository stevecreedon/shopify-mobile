mobi.views.fetchProductPanel = function(collection_id, product_id){
	mobi.views.fetchProduct(collection_id, product_id);
}

mobi.views.fetchProduct = function(collection_id, product_id){
	
	
	Ext.Ajax.request({
		url: '/db/products/' + product_id,
		method: 'GET',
		success: function(result, request){
			var json = Ext.decode(result.responseText);
			var product = Ext.ModelMgr.create(json, 'Product');
			mobi.views.setProductPanel(collection_id, product);
		}
	})
}

mobi.views.setProductPanel = function(collection_id, product){
	
	var productsList = mobi.views.viewport.getComponent('collection_products_' + collection_id); 
	
	var panel = mobi.views.createProductPanel(collection_id, product);
	mobi.views.viewport.getLayout().setActiveItem(panel, {type: 'slide', direction: 'left'});
}

mobi.views.createProductPanel = function(collection_id, product){
	var tapHandler = function (btn, evt) {
	    mobi.views.setProductsList(collection_id, "right");
	}
	
	mobi.views.Product = Ext.extend(Ext.Panel, {	
		html:  product.data.title,
		layout: 'fit',
		id: "product_" + product.getId(),
		dockedItems: [{
	        xtype: 'toolbar',
	        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
	        title: 'mobi',
	 		items:  [{ ui: 'back', text: 'Back' }],
	        defaults: { handler: tapHandler }
	    }],
	})

	return new mobi.views.Product({title: product});
}


