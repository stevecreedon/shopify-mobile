mobi.controllers.collections = {
	index: function(options){
		if(options == null){options = {}};
		
		var panel = mobi.views.viewport.getComponent('collections-view');
		
		if(panel == null){
			store = Ext.StoreMgr.getByKey("collections-store");
			store.load();
			panel = mobi.views.renderCollectionsList();
			mobi.views.viewport.getLayout().setActiveItem(panel);
		}else{
			mobi.views.viewport.getLayout().setActiveItem(panel, {type: 'slide', direction: options.direction});
		}
	}
}