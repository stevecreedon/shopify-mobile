
mobi.views.renderProductView = function(collection, product){
	return new mobi.views.Product.Panel({html: product.get("title"), 
										id: mobi.views.Product.key(product),
										collection: collection
									});
}

mobi.views.Product = {
	Show: Ext.extend(Ext.Panel, {
		initComponent: function () {
		    var me = this;  //me will always refer to the view instance
		    me.layout = 'fit';
			me.dockedItems = [{
		        xtype: 'toolbar',
		        title: 'mobi',
		 		items:  [{ ui: 'back', text: 'Back' }],
				defaults: { handler: function(btn, evt){
					Ext.dispatch({
			            controller: 'collects',
			            action: 'index',
						collection: me.collection,
						direction: 'right'
			        })
				}}
		    }];
		    //You have to remember to do this anytime you override the initComponent method!!!
		    mobi.views.Product.Show.superclass.initComponent.apply(this, arguments);
		},
		setProduct: function(options){
			console.log(options)
			this.removeAll();
			this.add([new mobi.views.Product.Header({product: options.product})]);
			this.collection = options.collection;
			this.doLayout();
		}
	}),
	Header: Ext.extend(Ext.Panel,{
		initComponent: function(){
			var me = this;
			me.layout = 'fit';
			me.html = "<h2>" + me.product.get("title") + "</h2>";
			mobi.views.Product.Header.superclass.initComponent.apply(this, arguments);
		}
	})
}

Ext.reg('view-product-show', mobi.views.Product.Show);

