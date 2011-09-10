Ext.regController("products", {
	me: this,
	show: function(options){
		var product = mobi.models.Product.fromStore(options.product_id);
			
		if(product == null){
			mobi.models.Product.fromLoad(options.product_id, 
					{success: this._showOnLoad, 
					 args: {collection: options.collection}});	
		}else{
			this._show(product, options.collection)
		}		
	},
	_showOnLoad: function(product, args){		
		Ext.ControllerManager.get("products")._show(product, args.collection)
	},
	_show: function(product, collection){
		if(this.showView == null){
			this.showView = this.render({xtype: 'view-product-show'});
			mobi.viewport.add(this.showView);
		}

		this.showView.setProduct({product: product, collection: collection})
		mobi.viewport.setActiveItem(this.showView, {type: 'slide', direction: 'left'});
	}
});