mobi.views.Collection = {
	key: "collections-view"
}

mobi.views.Collection.List = Ext.extend(Ext.List, {
    itemTpl: mobi.views.collectionInnerListItemTpl(),
    itemCls: 'mobi-collection-item',
    listeners: {
        itemtap: function (list, index, element, event) {
            // Grab a reference the record.
            var collection = list.getRecord(element);
            
			Ext.dispatch({
	            controller: 'collects',
	            action: 'index',
				collection: collection,
				direction: 'left'
	        })
        }
    }
});

mobi.views.Collection.Show = Ext.extend(Ext.Panel, {
	initComponent: function(){
		var me = this;
		me.id = 'collections-view';
		me.layout = 'fit';
		me.dockedItems = [{
	        xtype: 'toolbar',
	        title: 'mobi'
	    }];
	    me.items = [
	        // The TeagramLists is made up of a collection of TeagramInnerLists, defined above.
	        new mobi.views.Collection.List({
	             store: Ext.StoreMgr.getByKey(mobi.models.Collection.store_key)
	        })
	    ];
		mobi.views.Collection.Show.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('view-collections-show', mobi.views.Collection.Show);
