// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.

mobi.views.renderCollectsList = function(collection){
	return new mobi.views.Collect.ListPanel({collection: collection});
}

mobi.views.Collect = {
	onBackClick: function(btn, evt){
			Ext.dispatch({
	            controller: 'collections',
	            action: 'index',
				direction: 'right'
	        })
	},
	Index: Ext.extend(Ext.Panel, {
		initComponent: function () {
		    var me = this;  //me will always refer to the view instance
    		me.layout = 'auto',
    	    me.dockedItems = [{
        		xtype: 'toolbar',
         		title: 'mobi',
 				items:  [{ ui: 'back', text: 'Back' }],
        		defaults: { handler: mobi.views.Collect.onBackClick}
    		}]
			mobi.views.Collect.Index.superclass.initComponent.apply(this, arguments);
		},
		setCollection: function(collection){
			this.removeAll();
			this.add([new mobi.views.Collect.Header({collection: collection}), new mobi.views.Collect.List({store: collection.collectsStore})])
	 		this.doLayout();
		}
	}),
	List: Ext.extend(Ext.List, {
	    itemTpl: mobi.views.collectionProductsInnerListItemTpl(),
	    itemCls: 'mobi-collection-item',
		listeners: {
	        itemtap: function (list, index, element, event) {
	            // Grab a reference the record.
	
	            var collect = list.getRecord(element);
				var collection = Ext.StoreMgr.getByKey("collections-store").getById(collect.get("collection_id"));
				var product_id = collect.get("product_id");				
	            Ext.dispatch({
		            controller: 'products',
		            action: 'show',
					collection: collection,
					direction: 'left',
					product_id: product_id
		        })
	           
	        }
	    }
	}),
	Header: Ext.extend(Ext.Panel,{
		initComponent: function(){
			var me = this;
			me.layout = 'auto';
			me.html = "<h2>" + me.collection.get("title") + "</h2>";
			mobi.views.Collect.Header.superclass.initComponent.apply(this, arguments);
		}
	})
}

Ext.reg('view-collect-index', mobi.views.Collect.Index);