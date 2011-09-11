Ext.regController("collections", {
	index: function(options){
		if(this.indexView == null){
			var store = Ext.StoreMgr.getByKey('collection-store');
			store.load();
			this.indexView = this.render({xtype: mobi.views.Collection.xtype});
			mobi.viewport.add(this.indexView);
		}
		mobi.viewport.setActiveItem(this.indexView, {type: 'slide', direction: options.direction});	
	}
});