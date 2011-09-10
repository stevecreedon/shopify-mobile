Ext.regController("collections", {
	index: function(options){
		
		if(this.indexView == null){
			this.indexView = this.render({xtype: 'view-collections-show'});
			mobi.viewport.add(this.indexView)
			var store = Ext.StoreMgr.getByKey(mobi.models.Collection.store_key);
			store.load();
		}
		
		mobi.viewport.setActiveItem(this.indexView, {type: 'slide', direction: options.direction});	
	}
});