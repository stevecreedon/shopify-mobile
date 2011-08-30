mobi.controllers.collects = {
	index: function(options){
		var panel = mobi.views.viewport.getComponent(mobi.views.Collect.key(options.collection));
		
		if(panel == null){
			options.collection.collects().load();
			panel = mobi.views.renderCollectsList(options.collection);
			mobi.views.viewport.add(panel);
		}
		
		mobi.views.viewport.getLayout().setActiveItem(panel, {type: 'slide', direction: options.direction});
	}
}