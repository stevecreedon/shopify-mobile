Ext.regController("products", {
	show: function(options){
		var product = (options.product || mobi.models.Product.fromStore(options.product_id));

		if(product == null){
			mobi.mask.show();
			mobi.models.Product.fromLoad(options.product_id, 
					{success: function(){
						Ext.dispatch({
				            controller: 'products',
				            action: 'show',
							collection: options.collection,
							direction: 'left',
							product_id: options.product_id
				        })
						mobi.mask.hide();
					}, 
					args: {collection: options.collection}});
			return;	
		}
		
		if(this.showView == null){
			this.showView = this.render({xtype: 'view-product-show'});
			mobi.viewport.add(this.showView);
		}

		this.showView.setProduct({product: product, collection: options.collection});
		mobi.viewport.setActiveItem(this.showView, {type: 'slide', direction: 'left'});
					
	}
});
