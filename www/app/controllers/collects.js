mobi.controllers.collects = {
	index: function(collection){
		var panel = mobi.views.viewport.getComponent(mobi.views.Collect.key(collection));
		
		if(panel == null){
			collection.collects().load();
			panel = mobi.views.renderCollectsList(collection);
			mobi.views.viewport.add(panel);
		}
		
		mobi.views.viewport.getLayout().setActiveItem(panel, {type: 'slide', direction: 'left'});
	}
}