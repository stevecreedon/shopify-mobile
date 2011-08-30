mobi.controllers.products = {
	show: function(options){
		var view = mobi.views.viewport.getComponent(mobi.views.Product.key(options.product));
		
		if(view == null){
			view = mobi.views.renderProductView(options.collection, options.product);
		}else{
			view.collection = options.collection;
		}
		
		mobi.views.viewport.getLayout().setActiveItem(view, {type: 'slide', direction: 'left'});
	}
}