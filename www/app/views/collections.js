mobi.views.Collection = {
	List: Ext.extend(Ext.List, {
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
	}),
	Index: Ext.extend(Ext.Panel, {
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
		             store: Ext.StoreMgr.getByKey('collection-store')
		        })
		    ];
			mobi.views.Collection.Index.superclass.initComponent.apply(this, arguments);
		}
	}),
	xtype: 'view-collections-index'
};


Ext.reg(mobi.views.Collection.xtype, mobi.views.Collection.Index);
