Ext.regController("collects", {
	index: function(options){	
		if(this.indexView == null){
			this.indexView = this.render({xtype: 'view-collect-index'});
			mobi.viewport.add(this.indexView)
		}

		if(options.collection.collects().data.length == 0){
			options.collection.collects().load(
				function(){
					Ext.dispatch({
			            controller: 'collects',
			            action: 'index',
						collection: options.collection,
						direction: 'left'
			        });
				}
			);
			return;
		}
		this.indexView.setCollection(options.collection);
		mobi.viewport.setActiveItem(this.indexView, {type: 'slide', direction: options.direction});
	}
});