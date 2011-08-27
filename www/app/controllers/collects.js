mobi.controllers.collects = {
	index: function(collection){
		collection.collects().load();
		var list = mobi.views.fetchProductsList(collection);
		mobi.views.viewport.add(list);
		mobi.views.viewport.getLayout().setActiveItem(list, {type: 'slide', direction: 'left'});
	}
}