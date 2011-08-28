mobi.controllers.collections = {
	index: function(options){
		if(options == null){options = {}};
		
		var panel = mobi.views.viewport.getComponent(mobi.views.Collection.key);
		
		if(panel == null){
			store = Ext.StoreMgr.getByKey(mobi.models.Collection.store_key);
			store.load();
			panel = mobi.views.renderCollectionsList();
			mobi.views.viewport.getLayout().setActiveItem(panel);
		}else{
			mobi.views.viewport.getLayout().setActiveItem(panel, {type: 'slide', direction: options.direction});
		}
	}
}