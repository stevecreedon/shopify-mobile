
mobi.views.renderProductView = function(collection, product){
	return new mobi.views.Product.Panel({html: product.get("title"), 
										id: mobi.views.Product.key(product),
										collection: collection
									});
}

mobi.views.Product = {
	Panel: Ext.extend(Ext.Panel, {
		initComponent: function () {
		    var me = this;  //me will always refer to the view instance
		    me.layout = 'fit';
			me.dockedItems = [{
		        xtype: 'toolbar',
		        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
		        title: 'mobi',
		 		items:  [{ ui: 'back', text: 'Back' }],
				defaults: { handler: function(btn, evt){mobi.controllers.collects.index({collection: me.collection, direction: 'right'})}}
		    }];
		    //You have to remember to do this anytime you override the initComponent method!!!
		    mobi.views.Product.Panel.superclass.initComponent.apply(this, arguments);
	}}),
	key: function(product){return "product_" + product.getId()}	
}


